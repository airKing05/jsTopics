console.log("prototype")

// prototype is mechanism by which javascript inherit properties and method from any other object
// prototype can be use anywhere like - arr, object, function , variable

// inheritance in core javascript doing by prototype 
// no need to use call apply and bind method to inherit properties -- it is part of ES6, use in typeScript

let user = {
    getFullName: function(){
        return console.log(this.name+ " "+ this.lastName)
    },
    getAge: function(){
        let age = new Date().getFullYear() - this.birthYear
        return console.log(age)
    }
};

let student = {
    name: 'anilraj',
    lastName: 'meena',
    birthYear: 1997
}

let teacher = {
    name: 'arnab',
    lastName: 'dutta',
    birthYear: 1982,
}

student.__proto__ = user;
teacher.__proto__ = user;

// console.log(student.getAge())
// console.log(teacher.getFullName())

// can also use with proto
let teacher1 = {
    name: 'arnab',
    lastName: 'dutta',
    birthYear: 1982,
    getAge: user.getAge,
    getFullName: user.getFullName

}

console.log(teacher1.getFullName())


// in console
// teacher by using prototype, will not load user properties, whenever we need the properties and method then it will load
// like teacher.getAge() 
//teacher
//{ name: 'arnab', lastName: 'dutta', birthYear: 1982 }

// teacher directly assigning the properties, it will load method or properties automatculy (sara data ek sath laod ho jata hai), although we do not need these properties or method
// so directly assigning properties or method, it will create unusual memory wastage
//teacher1
//{name: 'arnab', lastName: 'dutta', birthYear: 1982, getAge: ƒ, getFullName: ƒ}


// for inbuilt js prototype in variable
let aVariable = 'abc';
aVariable.__proto__
//String { '', constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, … }
// because variable value is string type
String.prototype

aVariable.__proto__ == String.prototype

aVariable.length 
// here length is prototype, because it is existing inside the this prototype object
// String { '', constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, … } 



// can we built custom properties and method
// yes,
// student.__proto__ = user; is not good way to add custom data
// we directly assign to custom properties to data type

// built customProperties for object
Object.prototype.customPropertiesObject = "this is custom properties for object"
// we can access it like 
teacher.customPropertiesObject;

// built customMethod or function for object
Object.prototype.customMethodObject = function(){
    return "this is custom function or method for object"
}
// we can access it like 
teacher.customMethodObject;


// built customProperties for string
String.prototype.customPropertiesString = "this is custom properties fro string"
// we can access it like 
aVariable.customPropertiesObject;

// built customMethod or function for object
Object.prototype.customMethodString = function () {
    let newLength = this.length + 2 // alway show , 2 length bdhake
    return newLength;
}
// we can access it like 
teacher.name.customMethodString;


// do not change original properties and method of javascript prototype, can be change but it will effect in  all project wherever these properties will used
// never do this
String.prototype.bold = function(){
    return "bold error"
}