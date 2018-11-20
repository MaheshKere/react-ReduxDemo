import React, { Component } from 'react';
import EmpItem from './EmpItem';

class EmpList extends Component {

  constructor(props){
       super(props);
  } 
 
   
   render() {
     
     let array=[]; 
     this.props.employeeList.map( (emp) =>{
      
    if(emp.name.indexOf(this.props.searchText)==0 || this.props.searchText==""){
    array.push(emp);
      }
     },this
         );  
     
     return (
       array.map( (emp) =>
        
       <EmpItem click={this.props.click}  emp={emp} key={emp.id}
       selectedEmp={this.props.selectedEmp}  /> 
         
              ));
     }
}

export default EmpList;