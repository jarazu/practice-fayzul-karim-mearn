const p =  new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('not resolving')
        try {
            resolve (new Date().toLocaleTimeString())
        } catch (error) {
            reject (error)
        }
    }, 4000);
});

console.log(p, new Date().toLocaleTimeString());
const myThen = (result) => console.log('myThen', result)
p.then(myThen)
console.log('result: ', p, new Date().toLocaleTimeString());