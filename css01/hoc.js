console.log('hoc')
// small details are in as01

// how to make custom hoc???

// create custom hoc for number
let data = 10;
Number.prototype.customFuncNumber = function (x) {
    return x(this)  // this refer to the data
};

let resultCustomFuncNumber = data.customFuncNumber((x) => {
    return x + 100;
})

console.log("resultCustomFuncNumber", resultCustomFuncNumber)

// create custom function for array
// for map or polyfill fro map

let array = [2, 4, 3, 6];

Array.prototype.customFuncMap = function (x) {
    //console.log(this) // this refer to array
    let newArr = [];
    let len = this.length;
    for (let i = 0; i < len; i++) {
        // console.log(x(this[i]))
        newArr.push(x(this[i]))
    }
    return newArr;
};

let resultCustomFuncMap = array.customFuncMap((item) => {
    return item * 2
})
console.log("resultCustomFuncMap", resultCustomFuncMap)

let resultCustomFuncMap2 = array.customFuncMap(item => item - 2)
console.log("resultCustomFuncMap2", resultCustomFuncMap2)