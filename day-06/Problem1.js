/*Problem 40: Create a Promise that resolves with "Data loaded" after 2 seconds.*/
const promise = new Promise((resolve) => {
    setTimeout(() => {
       resolve("Data Loaded")
    }, 2000);
});