function deepClone(obj) {
    // 判断obj类型 如果不是 object 就返回
    if (obj === null) return obj
    if (typeof obj !== 'object') return obj

    // 判断 obj 属性的类型 反回相对应的类型
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);

    // 新建一个对象
    let cloneObj = new obj.constructor();
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key]);
        }
    }
    return cloneObj;
}