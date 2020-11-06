// // for循环递归 并 输出每一项的值

// // 思路一： fibo函数负责获得第n项的值 fun函数负责循环打印
// // function fun(n) { // 打印出从0开始到第n项的fibo
// //     function fibo(n) {
// //         if (n === 0) return 0;
// //         if (n === 1 || n === 2) return 1;
// //         var pre = 1, now = 1, nex;
// //         for (let i = 2; i < n; i++) {
// //             nex = now + pre;
// //             pre = now;
// //             now = nex;
// //         }
// //         return nex;
// //     }
// //     for (let i = 0; i < n; i++) {
// //         console.log(fibo(i));
// //     }
// // }
// // fun(10)

// 思路二： 直接一次循环，打印各项的值。
function fibo(n) {
    if (n === 1) {
        console.log(0);
        return 0;
    }
    if (n === 2) {
        console.log(0);
        console.log(1);
        return 1;
    }
    console.log(0);
    console.log(1);
    console.log(1);
    var pre = 1, now = 1, nex;
    for (let i = 2; i < n - 1; i++) {
        nex = now + pre;
        console.log(nex);
        pre = now;
        now = nex;
    }
}

fibo(10)