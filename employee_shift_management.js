//Task 1 Create an Employees Array of Employee Objects
const employees = [

    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
    
];

console.log(employees)

// Task 2 create a Function to Display Employee Shift Details
function displayEmployeeShift (employee) {
    employees.forEach(worker => (worker.name, worker.shifts))
      return (employee)
    (console.log(`Employee Shift Details: ${employee}`))
}

// Task 3 Create a Function to Assign a New Shift
function assignShift( employee) {
    let employee = employees.find(employee => employee.name === employeeName);
    if (!employee) {
        console.error(`Error: Employee ${employeeName} not assigned.`);
        return;
    }
    let existingShift = employee.shifts.find(shift => shift.day === day);
    if (existingShift) {
        console.error(`${employeeName} is already assigned a shift on ${day}.`);
        return;
    }
    employee.shifts.push({ day: day, hours: hours });
    console.log(`${employeeName} has been assigned a new shift on ${day}, for ${hours} hours.`);
} 
//