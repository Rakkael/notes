function Fun(name, age) {
    this.age = age;
    this.name = name;
    // return that
} // 创建一个构造函数

Fun.prototype.sayName = function () { console.log(this.name) } // 给构造函数的原型添加方法

// 实现自己的new方法 parent是构造函数  args 是参数 array类型
function myNew(parent, ...args) {
    // 把构造函数的原型新创建的类 给 child 此时child有了sayName方法
    let child = Object.create(parent.prototype);
    // 让构造函数在child内进行创建，其中传参数 args 此时child有了 this.name = name 的属性
    let result = parent.apply(child, args); //  因为参数是array所以用apply

    if (typeof result !== 'object') { // 判断构造函数有没有返回对象
        return child // 如果没有 则返回child （因为原型继承，方法创建都是在child中完成的，因此child就是需要返回的对象）
    }
    return result // 如果在构造函数中 有手动返回对象 则返回result 否则 result的值是undefined
}

// var fun = new Fun('Tom');
// console.log(fun.name)
// fun.sayName();

var myfun = myNew(Fun, 'Jerry', 24);
console.log(myfun.name)
myfun.sayName()
