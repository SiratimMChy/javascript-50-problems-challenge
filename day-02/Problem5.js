/*Problem 13: From an array of objects, find all people whose age is 18 or older.*/
let people = [
    { name: "Asif", age: 20 },
    { name: "Rahim", age: 16 },
    { name: "Karim", age: 25 },
    { name: "Sakib", age: 17 }
];
let adultPeople = people.filter(person => person.age >= 18);
console.log(adultPeople);
