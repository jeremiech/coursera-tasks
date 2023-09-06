const { getEmployee, createEmployee } = require('./src/callbacks')

const employees = [
    { name: 'Adam', designation: 'Manager' },
    { name: 'Harry', designation: 'Developer' }
];
createEmployee(employees,{ name: "Janet", designation: "HR" }, (err, result) => {
    if (err) {
        return console.log(err)
    }
    console.log(result)
})