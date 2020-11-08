var chinese = {
    nation: '中国',
}

var doctor = {
    career: '医生'
}

function myObject(obj) {
    function F() { };
    F.prototype = obj;
    return new F();
}

// function F() { };
// F.prototype = chinese;
// var doctor = new F();
var doctor = myObject(chinese);
doctor.career = '医生';

console.log(doctor)
console.log(doctor.nation)
console.log(doctor.career)

