const onloadEmpList = (state ={}, action) => {
    switch (action.type) {
  
    case 'EMPLOYEE_LIST':
        return action.empList
    default:
        return state
    }
  }
  
  export default onloadEmpList