console.log("set in js ");

// set is collection of uniq value
let set = new Set([1,4,2,5,2,6])
let arr = [1,4,6,2,7,1,3]
let obj = {
    name: "anilraj",
    lastName: "anilraj"
}
console.log(set)
console.log(arr);
console.log(obj)

//  the objects multiple same value can be useful and access-able , but can not useful in  array's same value
// obj.name obj.lastName

// so for the the uniq vale set came.

// can multiple data type in set 
let set2 = new Set([1,4,2, "anilraj", "anilraj", true])
let arr2 = [1, 4, 2, "anilraj", "anilraj", true]
console.log(set2);
console.log(arr2)

// arr value can be access easly by length but not set
// arr[2] => 6, set[2] => undifine

let set3 = new Set();
set3.add("hello");
set3.add(30);
set3.add(39);
set3.add("vikash");
set3.delete(30);
//set3.clear();

// loop in set
//forEach
set3.forEach(item=>{
console.log("forEach", item)})

// for of loop 
for(x of set3){
    console.log(" for of",x);
}

// convert arr to set
let arr4 = [1,5,2,4,63,1,6,"hello", true, ["anilraj", 24]];
arr4 = new Set(arr4);
console.log(arr4)

// convert set to array
let set4 = new Set([2,4,2,6,26,73234,345]);
let setOfArr = [...set4]
console.log(setOfArr)
