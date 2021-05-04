// Your code here
function createEmployeeRecord(arr) {
  let employee = {};
  employee['firstName'] = arr[0];
  employee['familyName'] = arr[1];
  employee['title'] = arr[2];
  employee['payPerHour'] = arr[3];
  employee['timeInEvents'] = [];
  employee['timeOutEvents'] = [];
  return employee;
}