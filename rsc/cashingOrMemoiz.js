// fie#01

function memoize(cb, context){
    const cash ={};
    return function (...args){
        let argCash = JSON.stringify(args);
        if(!cash[argCash]){
               cash[argCash] = cb.call(context || this, ...args);
        }
        console.log(cash);
        return cash[argCash]; // "20,30" = 50
        
    }
}
function findSum(a, b){
    for (let index = 1; index < 100000000; index++){}  
    return a+b
};

const returnedFunc = memoize(findSum);

console.time("first time");
console.log(returnedFunc(3, 4));
console.timeEnd("first time");


console.time("second time");
const result = returnedFunc(3,4)
console.log(result)
console.timeEnd("second time");