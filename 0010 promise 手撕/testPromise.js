// const MyPromise = require('./MyPromise.js')

// new MyPromise((resolve, reject) => {
//     console.log('开始01');
//     resolve(1);
// })
//     // .then()
//     .then((value) => {
//         return new MyPromise((resolve, reject) => {
//             console.log('开始02');
//             resolve(value + 1);
//         })
//     }, (reason) => {
//         console.log(reason);
//     })
//     .then(value => {
//         console.log('value:', value);
//     }, reason => {
//         console.log('reason:', reason);
//     })


// new Promise((resolve, reject) => {
//     // resolve();
//     reject();
//     console.log('a');
// })
//     .then(
//         success => {
//             new Promise((resolve, reject) => {
//                 resolve();
//                 console.log('b');
//             })
//         },
//         err => {
//             throw new Error('error');
//         }
//     )
//     .then(
//         success => {
//             new Promise((resolve, reject) => {
//                 resolve();
//                 console.log('c');
//             })
//         },
//     )
//     .catch(cat => {
//         console.log('catched an error');
//     })

// 实现异步加载图片
new Promise((resolve, reject) => {
    console.log('加载图片中...');
    setTimeout(() => {
        resolve('img');
    }, 1000);
}).then(
    success => {
        console.log(success);
    }
).catch(
    cat => {
        console.log('err');
    }
)