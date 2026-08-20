/*Problem 20: Merge two objects using the Spread Operator (`...`).*/
let obj1 = {
    name: "Asif",
    age: 25
};

let obj2 = {
    department: "CSE",
    city: "Sylhet"
};

let obj = { ...obj1, ...obj2 };

console.log(obj);

