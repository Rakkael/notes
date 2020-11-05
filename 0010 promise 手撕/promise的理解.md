promise的理解，有哪几种状态
    1、
promise手撕

Promise 对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和 Rejected（已失败）。

通过回调里的resolve(data)将这个promise标记为resolverd，然后进行下一步then((data)=>{//do something})，

resolve里的参数就是你要传入then的数据

resolve() 自动执行 .then里的第一个函数
reject() 自动执行 .then里的第二个函数

是否可以从fullfilled转移到rejected

Promise的2个api
Promise.all()
Promise.race()


实现函数，返回Promise状态为resolve（用两种方法）；

用promise实现一个setTimeout