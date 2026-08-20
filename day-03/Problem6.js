/* Problem 22: From an array of employee objects, find the employee with the highest salary.*/

let employees = [
    { name: "Asif", salary: 30000 },
    { name: "Rahim", salary: 45000 },
    { name: "Karim", salary: 40000 },
    { name: "Sakib", salary: 50000 }
];
let highestSalary = employees[0];

for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary >= highestSalary.salary) {
        highestSalary = employees[i];
    }
}

console.log(highestSalary);

