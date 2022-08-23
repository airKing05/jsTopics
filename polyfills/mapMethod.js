const arr = [1, 2, 3, 4, 5];

let result = arr.map((item, index, arr) => {
    return item*10
});

console.log(result);

//polyfill

Array.prototype.myMap = function(callback){
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
       newArr.push(callback(this[i], i, this))
    };
    return newArr;
};

let result2 = arr.myMap((item, index, arr)=>{
    return item*100
})

console.log(result2)