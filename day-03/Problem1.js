/*Problem 17: Create a student object and use destructuring to extract name, age, and department.*/
let student = {
    name: "Asif",
    age: 25,
    department: "CSE"
};

let {name , age, department} = student;

console.log(`Name: ${name}, Age: ${age}, Department: ${department}`);
