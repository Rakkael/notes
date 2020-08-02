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