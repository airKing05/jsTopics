// ep 18
console.log("higher order function");

//hoc a function who can take any other function as a argument 
// or return function from it or both

function x() {
    console.log("function x: callback function");
};
function y(x) {
    console.log("function y: higher order function function");
    x();
    return function z() {
        console.log("function z: returned function");
    }
}
let returned = y(x);
returned();


// make hoc
let radios = [12, 13, 14, 15];

const area = function (rad) {
    let ans = Math.PI * rad * rad;
    return ans;
}
const parameter = function (rad) {
    let ans = 2* Math.PI * rad;
    return ans;
}
const diameter = function (rad) {
    let ans = 2 * rad
    return ans;
}

function calculate(radios, logic) {
    let ansArr = [];
    let len = radios.length;
    for (let i = 0; i < len; i++) {
        ansArr.push(logic(radios[i]))
    }
    return ansArr;
}
const resultArea = calculate(radios, area)
const resultParameter = calculate(radios, parameter)
const resultDiameter = calculate(radios, diameter)

console.log("Area",resultArea, "para", resultParameter, "Diameter",resultDiameter)


// by map method;
const resultMap = radios.map((area));
console.log("resultMap", resultMap)



// by forEach method;
// let forEachArr = [];
// const resultForEach = radios.forEach((area)=>{
//     forEachArr.push(area)
// } );
// console.log("resultForEach", resultForEach)


// polyfill for map method
Array.prototype.calculate = function (logic) {
    let ansArr = [];
    let len = this.length;
    for (let i = 0; i < len; i++) {
        ansArr.push(logic(this[i]))
    }
    return ansArr;
}

const polyfillResult = radios.calculate(area);
console.log("polyfillResult", polyfillResult)