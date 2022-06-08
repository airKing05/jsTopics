console.log("deep copy and shallow copy of an object")

// her one more consept come 
// pass by value and pass by reference 
// so primitive data type are pass by value and non primitive are pass by reference


// non primitive or pass by reference
let obj = {
    name: "anilraj"
}
let user = obj;  // here location of both is same like 1x01 
user.name = "meena"
console.log("user", user)
console.log("obj", obj)

// primitive or pass by value
let x = 21; //value= 21, reference = 1x01
let y = x; // now y value = 21, but reference = 1x02
x = 22;   // now x value = 22, and reference = 1x03 
console.log("x", x);
console.log("y", y);


// shallow copy and deep copy karte hai tb object ki value assign hoti hai ya pass hot hai na ki reference

//shallow copy ----------------------------------

let obj1 = {
    name: "anilraj"
}
// let user1 = Object.assign({}, obj1);  // now it is pass by value 
let user1 = { ...obj1 }    // by rest parameter / object
user1.name = "meena"
console.log("obj1", obj1)
console.log("user1", user1)

// it will cover the first level of object not nested object
// for inner object it will copy reference does not copy value

let obj2 = {
    name: "anilraj",
    address: {
        city: "kota",
        state: "raj"
    }
}
let user2 = { ...obj2 }
user2.name = "meena",
user2.address.city = "jaipur"
console.log("obj2", obj2)
console.log("user2", user2)



// deep copy ---------------------------
// to copy nested object 
// firstly converted it into string after copy convert string into object
// this is only way to deep copy or write a function and then do for loop on each key of nested objects

let obj3 = {
    name: "anilraj",
    address: {
        city: "kota",
        state: "raj"
    }
}
//          str-obj     obj-str
let user3 = JSON.parse(JSON.stringify(obj3))
user3.name = "meena",
user3.address.city = "jaipur"
console.log("obj3", obj3)
console.log("user3", user3)


// dis advantage of deep copy
// function and Date will not work 

let obj4 = {
    name: "anilraj",
    address: {
        city: "kota",
        state: "raj"
    },
    getFunction: function () {
        return "get-function-data"
    }
}
//          str-obj     obj-str
let user4 = JSON.parse(JSON.stringify(obj4))
user4.name = "meena",
user4.address.city = "jaipur"
console.log("obj4", obj4)
console.log("user4", user4) 
// function will not copy in user4


// Deep copy by Lodash cdn
// to resole it we can use lodash
let obj5 = {
    name: "anilraj",
    address: {
        city: "kota",
        state: "raj"
    },
    getFunction: function () {
        return "get-function-data"
    }
}

let user5 = _.cloneDeep(obj5)
user5.name = "meena",
user5.address.city = "jaipur"
console.log("obj5", obj5)
console.log("user5", user5) 