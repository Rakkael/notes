复制一份对象的2种方式
    let a = { abc: '123', efg: 456}

    1、let b = Object.assign({}, a)
    
    2、let b = {...a}


~~运算符：
把一个变量以数字进行输出
var a = '1';
console.log(~~a === 1); // true

for of 遍历value
for in 遍历key