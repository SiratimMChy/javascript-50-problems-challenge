/*Problem 46: Execute three asynchronous operations in parallel and get all their results together using Promise.all() */
const P1 = Promise.resolve("User");
const P2 = Promise.resolve("Product");
const P3 = Promise.resolve("Order");

Promise.all([P1, P2, P3]).then(res => {
    console.log(res);
});