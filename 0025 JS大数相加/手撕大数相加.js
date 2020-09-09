var add = function (a, b) {
    // 把传入的参数都转成string类型
    if (typeof a !== 'string' && typeof b !== 'string') {
        a = String(a);
        b = String(b);
    }
    // 找到字符串的最大长度，然后补0
    let maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, 0);
    b = b.padStart(maxLength, 0);
    // 对字符串逐位相加，个位相加结果保存为 geWeiSum
    // 是否进位保存为 jingWei
    // 结果保存为 sum 类型为字符串
    let geWeiSum = 0;
    let jingWei = 0;
    let sum = '';
    // 从字符串尾部进行循环
    // 个位数相加结果再加上进位
    // 最终结果除以10，向下取整，得到进位数
    // sum 加上 个位数与10取得的余数 得到相加结果（因为进位数在下一次循环进行计算）
    for (i = maxLength - 1; i >= 0; i--) {
        geWeiSum = parseInt(a[i]) + parseInt(b[i]) + jingWei;
        jingWei = Math.floor(geWeiSum / 10);
        sum = geWeiSum % 10 + sum;
    }
    return sum;
}
