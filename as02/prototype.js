console.log("prototype, prototypal Inheritance, prototype chaining")


// array inherit hidden properties from array prototype
let arr = ['anil', 'anilraj'];

// object inherit hidden properties from object prototype
let obj = {
    name: 'anilraj',
    city: 'Bundi',
    getIntro: function () {
        console.log(this.name + " "+ this.city)
    }
}

// function inherit hidden properties 
function func(){
    // nothing
}

// variable inherit hidden properties 
let num= 10;


// prototype chain
// array prototype
//local array, built by us
arr.__proto__
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

// js Array prototype who has hidden properties and method to in it and js attech to the local arr
Array.prototype
//[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

arr.__proto__ == Array.prototype



// local array ka prototype ka prototype 
arr.__proto__.__proto__ 
// can also write Array.prototype.__proto__ 
// but can not arr.__proto__.prototype
//{ constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, … }

Object.prototype
//{ constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, … }

arr.__proto__.__proto__ == Object.prototype
arr.__proto__.__proto__.__proto__ // null



// object prototype
obj.__proto__
//{ constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, … }
obj.__proto__ == Object.prototype
obj.__proto__.__proto__ // null



// function prototype
func.__proto__
//ƒ() { [native code] }

func.__proto__.__proto__ == Object.prototype
func.__proto__.__proto__.__proto__ // null

// every thing in js is Object comes from prototype



// let's see prototype created by us
let obj1 = {
    name: 'anilraj',
    city: 'Bundi',
    getIntro: function () {
        console.log(this.name + " from " + this.city)
    }
}

let obj2 = {
    name: 'Meena'
}
// never do this
//obj2 is inheriting properties and method from obj1
obj2.__proto__ = obj1;
console.log(obj2.city)
console.log(obj2.getIntro())




// now adding the method to Function prototype
Function.prototype.myBind = function (){
    console.log("atteching myBind function to Function prototype")
    console.log("now myBind function is method of Function Prototype")
    console.log("now each function can be access the myBind method")
    console.log("by Dot oprator")
}

function func2(){
    // called like func2.myBind()
}