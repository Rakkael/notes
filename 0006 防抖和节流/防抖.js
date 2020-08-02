var debounce = (() => {
    let timer = undefined;
    return (callback, delay) => {
        clearTimeout(timer);
        timer = setTimeout(callback, delay);
    }
})()