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
// Task 4 Create a Function to Calculate Total Hours Worked
function calculateTotalHours(employeeName) {
    let employee = employees.find(employee => employee.name === employeeName);
    if (!employee) {
        console.error(`error, ${employeeName} not found.`);
        return;
    }
    let totalHours = employee.shifts.reduce((sum, shift) => sum + shift.hours, 0);

    console.log(`${employeeName} has worked ${totalHours} hours.`);
}

//Task 5 Create a Function to List Employees with Free Days
function listAvailableEmployees(day) {
    let availableEmployees = employees.filter(employee => !employee.shifts.some(shift => shift.day === day));
    if (availableEmployees.length === 0) {
        console.log(`nobody is logged to work on ${day}.`);
    } else {
    console.log(`employees not logged on ${day}:`);
    availableEmployees.forEach(employee => {console.log(`- ${employee.name}`)})};
}


