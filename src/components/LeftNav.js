import React, { Component } from 'react';
import EmpList from './EmpList';
//import { Input, TextField } from '../@material-ui/core';
import SearchBox from './SearchBox';
import ListofEmps from '../container/ListofEmps';
import SearchText from '../container/SearchText';





class LeftNav extends Component {
    render() {
      
        return (
            <div>
                <SearchText />
                <ListofEmps/>
            </div>
            
    );
  }
}

export default (LeftNav);