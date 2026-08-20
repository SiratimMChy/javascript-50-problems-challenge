/*Problem 19: Use Nullish Coalescing (`??`) to provide a default value when a property is `null` or `undefined`.*/
let user = {
    name: "Asif",
    age: null ?? 25
};

console.log(user.name);
console.log(user.age);
