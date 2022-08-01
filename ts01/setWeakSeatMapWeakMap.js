console.log("set weakSet map weakMap");

// set 
// it contain only unique value, by object constrain
console.log("set")

let arr = [1,3,5,6,5,6]
let set = new Set(arr);
set.add({name: "anilraj"});
set.add(8);
set.add(8);
set.delete(5);
console.log(set.has(8))
console.log(set);
set.forEach(item =>{
    console.log("forEach", item)
})
for(x of set){
    console.log("forOF", x)
}


// map 
// key, value 
// key could be anything 
console.log("map");
let map = new Map([["name", "anilraj"], [true, "boolean value hai"], [23, "number key hai"]])
map.set({name:"abc"}, "this is object")
console.log(map.has("fb"))
console.log(map)
map.forEach((value, key) => {
    console.log(key,":", value)
})

for( [key, value] of map){
    console.log(key,":", value)
}


// WeakSet
// can store only object, can not iterate value in weakset

//let arr1 = [1,4,63,3]; can't
let obj1 = {"name": "anilraj", "age": 25}
// can not do like that new WeakSet(obj1)
let ws = new WeakSet()
ws.add(obj1)
ws.add({"abc":"dfe"})
console.log(ws)


// WeakMap
// WeakMap is also not iterable, can store object only 
console.log("WeakMap");
//can not do like that let wm = new WeakMap([["name", "anilraj"], [true, "boolean value hai"]);
// can not do like that let wm = new WeakMap(obj1)
let wm = new WeakMap();
let obj2 = {"name": "anilraj", age:27};
let obj3 = {}
wm.set(obj2, "private")
wm.set(obj3, "public data")

console.log(wm.has(obj2))
wm.delete(obj3)
console.log(wm)