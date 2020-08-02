var a = function (name) { this.name = name }

a.prototype.data = {
    a: 1,
    b: 2
}

var fun1 = new a('h');
var fun2 = new a('b');
console.log(fun1.name === fun2.name)
console.log('fun1', fun1.name)
console.log('fun2', fun2.name)

fun1.name = 'b'
console.log(fun1.name === fun2.name)
console.log('fun1', fun1.name)
console.log('fun2', fun2.name)