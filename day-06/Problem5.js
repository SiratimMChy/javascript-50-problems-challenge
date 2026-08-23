/*Problem 44 Use try...catch with async/await to handle a rejected Promise.*/
const promise = Promise.reject("Something went wrong");

async function getData() {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

getData();