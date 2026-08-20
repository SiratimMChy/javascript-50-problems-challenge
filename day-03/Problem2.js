/*Problem 18: Access a nested object property safely using Optional Chaining (?.).*/
let user = {
    name: "Asif",
    address: {
        city: "Sylhet",
        country: "Bangladesh"
    }
};

let Name = user.name;
let City = user.address?.city;
let Country = user.address?.country;

console.log(`Name: ${Name}, City: ${City}, Country: ${Country}`);

