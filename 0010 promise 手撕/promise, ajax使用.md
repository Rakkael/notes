// 需求 先 a 后 b 再 c
$.ajax({
    url: 'a地址',
    success: function () {
        $.ajax({
            url: 'b地址',
            success: function () {
                $.ajax({
                    url: 'c地址'
                })
            }
        })
    }
})

// ajax 请求写法 回调地狱

new Promise((resolve, reject) => {
    resolve();
    console.log('a');
})
    .then(
        success => {
            Promise((resolve, reject) => {
                resolve();
                console.log('b');
            })
        },
        err => {
            throw new Error('error');
        }
    )
    .then(
        success => {
            Promise((resolve, reject) => {
                // resolve();
                reject();
                console.log('c');
            })
        },
    )
    .catch(cat => {
        console.log('catched an error');
    })