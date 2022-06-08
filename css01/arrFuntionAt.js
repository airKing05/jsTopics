let arr = [3,5,7,3,7,4,9];
// to get last element by length, 
// it is cost in case of dynamic arr, an large array 
console.log("older way", arr[arr.length-1]);
// to get last element by at() ES2022
console.log("new way", arr.at(-1))