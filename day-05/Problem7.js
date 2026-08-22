/*Problem 39: Implement Throttling so a function executes at most once within a specific time interval.*/
function throttle(fn, delay) {
    let waiting = false;

    return function () {
        if (waiting) {
            return;
        }

        fn();

        waiting = true;

        setTimeout(() => {
            waiting = false;
        }, delay);
    };
}

const scrollHandler = throttle(() => {
    console.log("Scrolling...");
}, 1000);

scrollHandler();
scrollHandler();
scrollHandler();