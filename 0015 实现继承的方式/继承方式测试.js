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
