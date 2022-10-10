const employee = {name: "sam", streetAddress: "66th street"};
function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key]:value})
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
   const employeecopy = {... employee}
   delete employeecopy[key]
   return employeecopy
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee [key]
    return employee
}
