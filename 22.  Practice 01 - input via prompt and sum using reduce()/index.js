console.log('hello');

const strinput = prompt('Input the numbers as an array');
// const strnumbers = strinput.split(',');
const numbers = strinput.split(',').map(n=> parseInt(n));
let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     sum+=numbers[i];
// }
const sum2 = numbers.reduce((s,c) => s+=c, 0);
console.log(sum2)
