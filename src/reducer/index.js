import { combineReducers } from 'redux'
import searchText from './searchText'
import selectedEmp from './selectedEmp'
import onloadEmpList from './onloadEmpList'

const rootReducer=combineReducers({
  searchText,
  selectedEmp,
  onloadEmpList
})

export default rootReducer
