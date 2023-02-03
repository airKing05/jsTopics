// fie #02
// compose method for the given function / polyfil for componse methods
// In compose method  we move right to left
// in pipe method we move left to right

function addFive(a){
    return a+5;
}
function subTwo(a){
    return a-2;
}
function multi10(a){
    return a*10;
}
function compose(...funcs){
    return function(args){
      return funcs.reduceRight((arg, fn) => fn(arg), args);
    }
}
let eveluat = compose(addFive, subTwo, multi10);
const result = eveluat(2);
console.log(result);