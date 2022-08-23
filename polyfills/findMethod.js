const arr = [1, 2, 3, 4, 5];

// it will return only fist value while filter return all the value

let result = arr.find((item, index, arr)=>{
    return item>3
});

console.log(result);

Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
       if(callback(this[i], i, arr)){
        return this[i];
       }
    }
}

let result2 = arr.myFind((item, index, arr)=>{
    if(item > 2){
        return item
    }
});

console.log(result2);