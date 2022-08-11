syncCallbackFunction = (index, start) => {
    const numIsPrime = isPrime(index);
    console.log('isprime', index, 'result: ', numIsPrime,'start: ', start, ' end: ', new Date())
}

const syncWithCallback = () => {
    for(let index = 0; index < 10; index++){
        // debugger;
        console.log('looping', index, new Date()); //.getSeconds()
        sleepWithCallback(index, syncCallbackFunction)
    }
}

const sleepWithCallback = (num, callback) => {
    const start = Date.now();
	const sleep = num * 1000;
    while(true){
        if(Date.now() - start > sleep){break}
    }
    callback(num, new Date(start));
}

const isPrime = (num) => {
    if(num < 2){return false;}
    for(let i = 2; i < num; i++){
        if(num % i === 0){return}
    }
    return true;
}

console.log(syncWithCallback()); //