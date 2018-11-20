import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { render } from 'react-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducer';
import { onloadEmpList }  from './actions/action'


const store = createStore(rootReducer);
const empList= [{id:'01', name:'MaheshKERE'},{id:'02', name:'Sujjyesh'},
{id:'03', name:'Nikhilkk'} ,{id:'04', name:'Mahekksh'},{id:'05', name:'Kulkarni'},{id:'06', name:'Pravin'},
{id:'07', name:'Mahesh Kere'}]

store.dispatch(onloadEmpList(empList));

store.subscribe(() => {
    console.log("store changed:: ",store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)



//ReactDOM.render(<SelectedListItem />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
