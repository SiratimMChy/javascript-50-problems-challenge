/*Problem 42: Chain three Promises sequentially and use the result of each Promise in the next step. */
Promise.resolve(10)
    .then(value => {
        return Promise.resolve(value * 2);
    })
    .then(value => {
        return Promise.resolve(value + 2);
    })
    .then(value => {
        return Promise.resolve(value / 2);
    }).then(value => {
        return Promise.resolve(console.log(value + 1));
    })
