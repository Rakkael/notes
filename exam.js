// 斐波那契前100个
// function fun(n) {
//     function fibo(n) {
//         if (n === 0) return 0;
//         if (n === 1 || n === 2) return 1;
//         var pre1 = 1, pre2 = 1;
//         var sum;
//         for (let i = 2; i < n; i++) {
//             sum = pre2 + pre1;
//             pre2 = sum;
//             pre1 = pre2;
//         }
//         return sum;
//     }
//     for (let i = 0; i < n; i++) {
//         console.log(fibo(i));
//     }
// }
// fun(5)


function fibo(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    var pre1 = 1, pre2 = 1;
    var sum;
    for (let i = 2; i < n; i++) {
        sum = pre2 + pre1;
        pre1 = pre2;
        pre2 = sum;
    }
    return sum;
}
var a = fibo(5)
console.log(a)
// function fibo(n) {
//     if (n === 0) {
//         console.log(0);
//         return 0;
//     }
//     if (n === 1) {
//         console.log(1);
//         return 1;
//     }
//     console.log(0);
//     console.log(1);
//     console.log(1);
//     var pre1 = 1, pre2 = 1;
//     var sum;
//     for (let i = 2; i < n; i++) {
//         sum = pre2 + pre1;
//         console.log(sum);
//         pre1 = pre2;
//         pre2 = sum;
//     }
//     return sum;
// }
// fibo(50)

// 输出数组中超过2/n个的元素