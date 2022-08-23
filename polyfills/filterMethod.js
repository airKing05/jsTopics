const arr = [1, 2, 3, 4, 5];

let result = arr.filter((item, index, arr) =>{
    return item>3
});

console.log(result)

Array.prototype.myFilter = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, arr)){
            // for 1&2, it will be false, so did not push to the newArr
            newArr.push(this[i])
        }
    }
    return newArr;
}

let result2 = arr.myFilter((item, index, arr) =>{
    return item>2
})
console.log(result2)