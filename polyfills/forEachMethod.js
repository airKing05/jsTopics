const arr = [1,2,3,4,5];

let result = arr.forEach((item,index, arr)=> 
console.log(item)
)


//polyfill 

Array.prototype.myForEach = function (callback) {
    for(let i=0; i<this.length; i++){
        callback(this[i], i, this)
    }

};

let result2 = arr.myForEach((item, index, arr) => console.log(item*100, index, arr))