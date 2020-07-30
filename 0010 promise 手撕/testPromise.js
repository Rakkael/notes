const MyPromise = require('./MyPromise.js')

new MyPromise((resolve, reject) => {
    console.log('开始01');
    resolve(1);
})
    // .then()
    .then((value) => {
        return new MyPromise((resolve, reject) => {
            console.log('开始02');
            resolve(value + 1);
        })
    }, (reason) => {
        console.log(reason);
    })
    .then(value => {
        console.log('value:', value);
    }, reason => {
        console.log('reason:', reason);
    })
