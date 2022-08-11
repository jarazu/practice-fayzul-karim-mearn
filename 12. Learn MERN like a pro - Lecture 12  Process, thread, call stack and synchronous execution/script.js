syncCallbackFunction = (start) => {
    const numIsPrime = isPrime(index);
    console.log('prime', index, numIsPrime, start, new Date().getSeconds())
}

const syncWithCallback = () => {
    for(let index = 0; index < 10; index++){
        // debugger;
        console.log('sleeping', index, new Date().getSeconds());
        sleepWithCallback(index*1000, syncCallbackFunction)
    }
}

const sleepWithCallback = (num, callback) => {
    const start = Date.now();
    while(true){
        if(Date.now() - start > num){break}
    }
    callback(new Date(start).getSeconds());
}

const isPrime = (num) => {
    if(num < 2){return false;}
    for(let i = 2; i < num; i++){
        if(num % i === 0){return}
    }
    return true;
}

console.log(syncWithCallback()); //