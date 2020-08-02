var throttle = (() => {
    flag = true;
    return (callback, delay) => {
        if (!flag) return
        flag = false;
        setTimeout(() => {
            callback();
            flag = true;
        }, delay);
    }
})()