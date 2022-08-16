console.log("bing integer");
// bigInt is a data type which is use to handle larger integer value 
// 64 bit maximum integer value - 2**53-1
// 32 bit maximum integer value - 2**31-1
// in console number: blue color, string: red color, bigInt: green color

// how to define bigInt
let x = 100n
console.log(typeof x);

let y = BigInt(200);
console.log(typeof y)

// operation 
console.log(x*y)
console.log(x<y)

// condition
if(y){  // if y is zero, will not go inside 
    console.log(y)
}


// loosely and strictly compair
console.log(x==100) // true
console.log(x===100)

// math module is not working 
//let maxi = Math.max(x, y) // Cannot convert a BigInt value to a number


// type conversion or coverson
let z = "10";
console.log(typeof +z); // number
// but
// console.log(typeof +x); // Cannot convert a BigInt value to a number
