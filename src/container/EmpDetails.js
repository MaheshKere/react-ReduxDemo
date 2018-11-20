import React, { Component } from 'react';

import { Typography } from '@material-ui/core';

import { connect } from 'react-redux'

class EmpDetails extends Component {
    
    constructor(props){
        super(props)
     

    } 
   
   
render() {
     let empDetails;
   
     if(this.props.emp===undefined ?false : this.props.emp.name) {
    empDetails=<Typography >
    <ul><li>{this.props.emp.name}</li><li>{this.props.emp.id}</li></ul> </Typography>
     }else{
        empDetails=<Typography noWrap>{'Select Employee .'}</Typography>
 }
        
        return (
           <div> 
      
           {empDetails}
           
           </div>
            
    );
  }
}


  function mapStateToProps(state) {
    return {
        emp: state.selectedEmp

    }
  }

export default connect(
  mapStateToProps)((EmpDetails))
