/*Problem 43: Use async/await to get the resolved value from a Promise. */
const promise = Promise.resolve("Data loaded");
async function getData() {
    const result = await promise;
    return result;
}
getData().then(result => {
    console.log(result);
})