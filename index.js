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

function createEmployeeRecords(arr) {
  return arr.map(el => {
    return createEmployeeRecord(el);
  })
}

function createTimeInEvent(emp,date) {
  emp.timeInEvents.push({
    type: "TimeIn",
    hour: date.split(' ')[1],
    date: date.split(' ')[0]
  });
  return emp;
}

function createTimeOutEvent(emp,date) {
  emp.timeOutEvents.push({
    type: "TimeOut",
    hour: date.split(' ')[1],
    date: date.split(' ')[0]
  });
  return emp;
}

function hoursWorkedOnDate(rec,date) {
    let timeIn = parseInt(rec.timeInEvents.find(el => el.date === date).hour);
    let timeOut = parseInt(rec.timeOutEvents.find(el => el.date === date).hour);
    return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(rec,date) {
  return hoursWorkedOnDate(rec,date) * rec.payPerHour;
}

function allWagesFor(rec) {
  return rec.timeInEvents.reduce((total,current) => total + wagesEarnedOnDate(rec,current.date),0);
}

function findEmployeeByFirstName(records,fname) {
    const filtered = records.filter(rec => rec.firstName === fname);
    return (filtered.length === 0) ? undefined : filtered;
}
