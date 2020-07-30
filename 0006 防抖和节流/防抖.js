

var debounce = (() => {
    let timer = 0;
    return (callback, delay) => {
        clearTimeout(timer);
        timer = setTimeout(callback, delay);
    }
})()