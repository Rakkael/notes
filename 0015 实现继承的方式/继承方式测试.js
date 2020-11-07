// call bind apply 继承
function Animal() {
    this.spieces = 'Animal';
}

function Dog(name, color) {
    this.name = name;
    this.color = color;
    Animal.apply(this);
}

var dogge = new Dog('dogge', 'yellow');

console.log(dogge.spieces);
dogge.spieces = 'dog';
console.log(dogge.spieces);

function Cat(name, color) {
    this.name = name;
    this.color = color;
    Animal.apply(this);
}

var catty = new Cat('catty', 'white');
console.log(catty.spieces);


// 使用 class ... extends 继承
class Animal { // class 只是语法糖，本质上还是继承构造函数的原型
    constructor() {
        this.species = '动物';
    }
}
class Cat extends Animal {
    constructor(name, color) {
        super(); // super必须在this之前。 个人理解：super含义为继承父类属性。
        this.name = name;
        this.color = color;
    }
}
var cat1 = new Cat('kitty', 'black');
console.log(cat1.species)


// 测试 空对象媒介继承 多层继承
function Animal() { };
Animal.prototype.spieces = '动物';
function Cat(name, color) {
    this.cat = 'cat';
    this.name = name;
    this.color = color;
}
function Dog(name, age) {
    this.dog = 'dog';
    this.name = name;
    this.age = age;
}
var F = function () { };
F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;
var cat1 = new Cat();
console.log(cat1.spieces);
console.log(Cat.prototype.__proto__);
console.log(cat1.__proto__)
console.log(Cat.prototype.__proto__ === Animal.prototype);

function Animal() {
    this.spieces = 'dongwu';
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
var cat1 = new Cat('fuck', 'me');

Dog.prototype = cat1;
Dog.prototype.constructor = Dog;
var dog1 = new Dog('holy', 'shit');
console.log(dog1.spieces, dog1.cat, dog1.dog) // 结论: 在原型链上的属性都能被访问到

