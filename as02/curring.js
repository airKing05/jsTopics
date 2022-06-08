// Frontend interview ep1
console.log("curring by bind and closer");

// curring by bind method
function multy(x, y) {
    return x * y;
};

const multyBy2 = multy.bind(this, 2);  // (2,3) it will ignore 5
const resultMultyBy2 = multyBy2(5);  // if remove two ( 5,3) here will work
console.log("multyBy2", resultMultyBy2)

const multyBy3 = multy.bind(this, 3);
const resultMultyBy3 = multyBy3(5);
console.log("multyBy3", resultMultyBy3)


// curring by closer method

function multyCloser(x) {
    return function (y) {
        return x * y;
    }
};

const multyBy2byClouser = multyCloser(2);
const resultMultyBy2byClouser = multyBy2byClouser(5);
console.log("multyBy2byClouser", resultMultyBy2byClouser);



// find sum by curring

function sum(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
};

const sumResult = sum(2)(3)(4); // can call like that
console.log("sumResult", sumResult);


// infinite curring of sum 

function infiniteSum(x) {
    return function (y) {
        if (!y){
            return x;
        }else{
            return infiniteSum(x+y);
        }
    }
};

const infiniteSumResult = infiniteSum(2)(3)(4)(5)(); // can call like that
console.log("infiniteSumResult", infiniteSumResult);


// infinite curring of sum 
// in one line of code

let sumInOneLine = x => y => y ? sumInOneLine(x+y) : x

const sumInOneLineResult = sumInOneLine(2)(3)(4)(5)(); // can call like that
console.log("sumInOneLineResult", sumInOneLineResult);