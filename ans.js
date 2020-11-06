a = {
    c: 1,
    func: function (param) {
        console.log(this.c);
        console.log(param);
    }
}

b = {
    c: 2,
    func: function () {
        console.log(this.c);
        console.log(param);
    }
}
a.func('参数a'); // 1 参数a
a.func.call(b, '参数b'); // 2 参数b
