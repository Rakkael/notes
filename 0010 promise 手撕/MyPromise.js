// class Promise {
//     constructor(executor) {
//         if (typeof executor !== 'function') {
//             throw new TypeError(`Promise resolver ${executor} is not a funciton`);
//         }
//         this.initValue();
//         this.initBind();
//         executor(this.resolve, this.reject);
//     }

//     initBind() {
//         this.resolve = this.resolve.bind(this);
//         this.reject = this.reject.bind(this);
//     }

//     initValue() {
//         this.value = null;
//         this.reason = null;
//         this.state = 'pending';
//     }

//     resolve(value) {
//         // 成功后的操作
//         if (this.state === 'pending') {
//             console.log('resolved');
//             this.state = 'fulfilled';
//             this.value = value;
//         }
//     }
//     reject(reason) {
//         // 失败后的操作
//         if (this.state === 'pending') {
//             console.log('rejected');
//             this.state = 'rejected';
//             this.reason = reason;
//         }
//     }
//     then(onFulfilled, onRejected) {
//         if (typeof onFulfilled !== 'function') {
//             console.log('onFulfilled is not a function');
//             onFulfilled = function (value) {
//                 return value
//             }
//         }

//         if (typeof onRejected !== 'function') {
//             console.log('onRejected is not a function');
//             onRejected = function (reason) {
//                 return reason
//             }
//         }

//         if (this.state === 'fulfilled') {
//             onFulfilled(this.value);
//         }
//         if (this.state === 'rejected') {
//             onFulfilled(this.reason);
//         }
//     }
// }

// module.exports = Promise

// class P {
//     constructor(executor) {
//         if (typeof executor !== 'function') {
//             throw new TypeError(`${executor} is not a function`);
//         };
//         // 初始化值
//         this.value = null;
//         this.reason = null;
//         this.state = 'pending';
//         const resolve = (value) => {
//             if (this.state === 'pending') {
//                 this.state = 'fulfilled';
//                 this.value = value;
//             }
//         }
//         const reject = (reason) => {
//             if (this.state === 'pending') {
//                 this.state = 'rejected';
//                 this.reason = reason;
//             }
//         }
//         executor(resolve, reject);
//     }

//     then(onFulfilled, onRejected) {
//         if (typeof onFulfilled !== 'function') {
//             // 如果onflufilled不是函数，那么就把它打包成函数，发往下一个then
//             onFulfilled = function (value) {
//                 return value;
//             }
//         }
//         if (typeof onRejected !== 'function') {
//             onRejected = function (reason) {
//                 return reason;
//             }
//         }
//         if (this.state === 'fulfilled') {
//             onFulfilled(this.value);
//         }
//         if (this.state === 'rejected') {
//             onRejected(this.reason);
//         }


//     }
// }

class P {
    events = [];
    constructor(fn) {
        if (typeof fn !== 'function') return new TypeError(`${fn} isnt a func`)
        this.state = 'pending';
        this.value = undefined;
        this._resolve = this._resolve.bind(this);
        fn(this._resolve);
    }
    _resolve(value) {
        if (this.state === 'pending') {
            this.state = 'fulfilled';
            this.value = value;
            this.events.forEach(fn => fn(value));
        }
    }
}

module.exports = P