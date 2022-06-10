console.log("map obj")

// map is advance object with new feature and better performance
// key of map can be any thing like object, array, number, boolean, string


const obj = {
    name: "anilraj",
    10: "this is number key in object",  // can assign value but can not get
    true: "this is boolean key in object"   // considring as string
};

const map = new Map([
    ['name', "anilraj"],
    [10, "this number key in map"],
    [true, "this boolean key in map"]

])

//console.log(obj.10); // can not access

// get data from obj and map
console.log(obj.true)
console.log(map.get(10)) 
console.log(map.get(true)) 

// get key from obj and map
console.log("obj keys are",Object.keys(obj));
console.log("map keys are", map.keys());

// set or add item into obj and map
obj.city = "kota";
map.set('city', 'kota')
console.log(obj)
console.log(map)

// update or put item into obj and map
obj.name = "anilraj meena"
map.set('name', "anilraj meena");
map.set({}, "object key")
map.set(()=>{}, "arrow function")

console.log(obj)
console.log(map)

// get value of obj and map
console.log("obj", Object.values(obj));
console.log(map.values());

// get size of obj and map
console.log(Object.keys(obj).length);
console.log(map.size);

// delete element from obj and map
delete obj.true;
map.delete(true);
console.log(obj);
console.log(map)

// element or key avlabilty
console.log(obj.hasOwnProperty('name'))
console.log(map.has('name'));

//loop in obj and map
// obj for of loop
for (const key of Object.keys(obj)) {
    console.log(key + " by for of -> " + obj[key]);
}
// obj for in loop
 for (const key in obj) {
     console.log(key + " by for in-> " + obj[key]);
 }

// map foreach loop
map.forEach((value, key)=>{
    console.log(key + " by foreach-> " + value);
})
// map for of loop 
for (const [key, value] of map) {
    console.log(key + " by for of loop-> " + value);
}


// type of obj and map
console.log(typeof(obj));
console.log(typeof(map));

