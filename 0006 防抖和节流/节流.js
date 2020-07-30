const throttle = ((callback, delay) => {
    let flag = true;
    return () => {
        if (!flag) {
            return;
        } else {
            flag = false;
            setTimeout(() => {
                callback();
                flag = true
            }, delay);
        }
    }
})()