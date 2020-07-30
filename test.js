// 非构造函数的继承

var Chinese = { nation: '中国' }
var Doctor = { career: '医生' }

function object(o) {
    function F() { } // 创造一个空函数对象
    F.prototype = o; // 给他的原型赋值为chinese 即 构造函数的prototype指向chinese
    return new F(); // new一个object，__proto__指向chinese
} // 为什么__proto__指向chinese? 因为指向构造函数的prototype

// 赋值
var Doctor = object(Chinese);
// 此时 Doctor == F() 的地址 F()是空函数没有属性
Doctor.career = '医生';  // 给空函数加一个 career的属性
console.log(Doctor.nation); // nation从空函数的父类属性里取得
console.log(Doctor.career);

