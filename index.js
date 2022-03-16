const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]: value,
      };
}

const newEmployee =  updateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "12 Broadway"
) 

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
  }

destructivelyUpdateEmployeeWithKeyAndValue(
    employee, 
    "streetAddress",
    "12 Broadway"
    )

function deleteFromEmployeeByKey (obj, key) {
       const newEmployee = {...obj}
       delete newEmployee.name;
       return newEmployee
    
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}




