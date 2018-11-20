const selectedEmp = (state ={} , action) => {
    switch (action.type) {
  
      case 'SELECTED_EMPLOYEE':
        return  action.employee
          
        

     
      
      default:
        return state
    }
  }
  
  export default selectedEmp