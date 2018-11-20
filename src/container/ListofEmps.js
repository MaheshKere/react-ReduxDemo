

import { connect } from 'react-redux'
import { employeeList } from '../actions/action'


import React from 'react'
import EmpList from '../components/EmpList';
import { selectedEmp } from '../actions/action'


  function mapStateToProps(state) {
    return {
        employeeList: state.onloadEmpList,
        selectedEmp: state.selectedEmp,
        searchText: state.searchText

    }
  }
  const mapDispatchToProps = dispatch => ({
    click: emp => dispatch(selectedEmp(emp))

  })



export default connect(
  mapStateToProps,
  mapDispatchToProps
  
)(EmpList)
