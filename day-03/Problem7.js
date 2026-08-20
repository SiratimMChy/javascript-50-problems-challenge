/* Problem 23: From an array of objects, create a new array containing only a specific property from each object.*/
let users = [
    { name: "Asif", age: 25 },
    { name: "Rahim", age: 22 },
    { name: "Karim", age: 28 }
];

let Name = users.map(user => user.name);
let Age  = users.map(user => user.age);

console.log(Name);
console.log(Age);

