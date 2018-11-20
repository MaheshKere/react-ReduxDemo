
import React, { Component } from 'react';
import { TextField } from '@material-ui/core';





const SearchBox = ({ searchText }) => (
    <TextField onChange={ (event) => { searchText(event.target.value)}}/>
  )
  



export default SearchBox