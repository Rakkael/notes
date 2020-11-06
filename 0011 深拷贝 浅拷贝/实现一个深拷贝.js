function deepClone(obj) {
    // 判断obj类型 如果不是 object 就返回
    if (obj === null) return obj
    if (typeof obj !== 'object') return obj  // 如果不是object 直接返回对应的值

    // 判断 obj 属性的类型 返回相对应的类型
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);

    // 新建一个对象
    let cloneObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) { // 避免复制父类属性
            cloneObj[key] = deepClone(obj[key]);
        }
    }
    return cloneObj;
}

// 常用方法
function deep(obj) {
    //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
    var objClone = Array.isArray(obj) ? [] : {};
    //进行深拷贝的不能为空，并且是对象或者是数组
    if (obj && typeof obj === "object") {
        for (key in obj) {
            if (obj.hasOwnProperty(key)) { // hasOwnProperty 可以用来忽略继承属性
                if (obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deep(obj[key]);
                } else {
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}

function deepClone(obj) {
    var objClone = Array.isArray(obj) ? [] : {};
    if (obj && obj === 'object') {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] && typeof obj[key] === 'object') {
                    objClone[key] = deepClone(obj[key]);
                } else {
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}