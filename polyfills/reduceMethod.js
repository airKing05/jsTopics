const arr = [1, 2, 3, 4, 5];

result = arr.reduce((acc, curr, index, arr)=>{
   return acc+curr
}, initialValue=0);

console.log(result);



//polyfill

Array.prototype.myReduce = function(callback, initialValue){
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
      acc = callback(acc,this[i], i, this)
    }
    return acc;
}

let result2 = arr.myReduce((accumulator, current, index, arr)=>{
    return accumulator = accumulator + current
}, 0);

console.log(result2)