function myPromiseRace(iterators) {
    return new Promise((resovle, reject) => {
        for (let p of iterators) {
            Promise.resolve(p)
                .then((res) => {
                    resovle(res);
                })
                .catch((err) => {
                    reject(err);
                })
        }
    })
}