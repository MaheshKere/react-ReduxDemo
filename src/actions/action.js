
export const searchText = text => ({
  type: 'SEARCH_TEXT',
  text
})

export const selectedEmp = employee => ({
  type: 'SELECTED_EMPLOYEE',
  employee
})

export const onloadEmpList = (empList) => ({
    type: 'EMPLOYEE_LIST',
    empList  
})




