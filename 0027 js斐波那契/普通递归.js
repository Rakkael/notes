// 输出每一项

function fun(n) { // 输出从0开始到第n项
    function fibo(n) { // 返回第n位的值
        if (n === 0) return 0;
        if (n === 1 || n === 2) return 1;
        return fibo(n - 2) + fibo(n - 1);
    }
    for (let i = 0; i < n; i++) {
        console.log(`${i + 1}: ${fibo(i)}`);
    }
}
fun(1)

