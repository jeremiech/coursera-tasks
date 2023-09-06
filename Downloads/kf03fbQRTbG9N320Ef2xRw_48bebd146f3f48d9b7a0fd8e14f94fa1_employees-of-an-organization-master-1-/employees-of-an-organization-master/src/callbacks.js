 
   // Define a getEmployee function that iterates over the employees list and displays it
   // Employees must be displayed after a timeout of 1 second.
   getEmployee = (employees,callback)=> {
       setTimeout(() => {    
        let names=employees.map(data=>data.name)

           // Write code here to display the name of the employee and return a callback        
           return callback(undefined,names);           
       },1000);
   }
   
   // Define a function that creates a new employee after 2 seconds.
   // and then makes a call to callback function to display the same.
   createEmployee = (employees,employee, callback) => {   
       setTimeout(()=>
       {
           let employeeList = employees.push(employee)
           let list=employees.map(data=>data)
           
           // write your code here to push new employee to employees list and return a callback.           
           return callback(undefined,list);
       },2000)
   }  

   module.exports = {getEmployee,createEmployee}
  


