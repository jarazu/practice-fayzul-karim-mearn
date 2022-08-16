const sleepWithPromise = (num) => {
    const p =  new Promise((resolve) => {
        setTimeout(() => {
                const start = Date.now();
                resolve (new Date(start));
        }, num);
    });
    return p;
}

sleepWithPromise()
    .then((start) => {})
    .catch((err) => {})