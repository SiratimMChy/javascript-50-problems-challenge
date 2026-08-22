/*Problem 38: Implement Debouncing so a function executes only after the user stops triggering it for a specific period.*/
function debounce(fn, delay) {
    let timer;

    return function () {
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    };
}

const search = debounce(() => {
    console.log("Searching...");
}, 1000);

search();
search();