let arr = [3, 5, 7, 3, 7, 4, 9];
// cut the arr length
console.log("original length", arr.length)
//arr.length = 3
console.log("cut length ARR",arr)

// sum of array's element
let sum = arr.reduce((acc, curr) => {
return acc += curr;
}, 0);

console.log("sum",sum)

// remove duplicate value from arr
// method 1 by set
let uniqValue = new Set(arr);
console.log("uniqValue by set", [...uniqValue])

// method-2 O(n^2)
    let num = [];
    let len = arr.length;
    for(let i =0; i< len; i++){
        if(num.indexOf(arr[i]) === -1){
            num.push(arr[i])
        }
    }

console.log("method-2",num)


// method-3 O(log(n)+ n)
let newArr = [];
// sort the arr first the compair the element
arr.sort((a,b) => a-b);  // log(n)
let len2 = arr.length;
let temp;
for (let i = 0; i < len; i++) {  // n
    if(arr[i] !== temp){
        newArr.push(arr[i])
        temp=arr[i]
    }
}

console.log("method-3",num);


// method-4 o(n)
let obj = {};
for( let i of arr){
    // object keys are always uniq
    obj[i] = true;
};
const uniqKey = Object.keys(obj);
console.log("uniqKey", uniqKey);




/// Comma oprator

let x = 10;
// (calculation, print)
x = (x++, x);  // 11
x = (x+20, x); // output will be 30(10+20)
x = (x+20, 5) // output will be 5
let y= 40;
x = (x+20, y) // output will be 40
console.log(x)


/// swap using destructuring 
let a = 20; b= 40;
[a,b]=[b,a]
console.log("a",a, "b",b)