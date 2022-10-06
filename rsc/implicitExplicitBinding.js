// rode side coder 
// fie#01

// Implicit bindig
//this in such scenarios will point to the object using which the function was invoked. Or simply the object on the left side of the dot.
let obj1 = {
    name: 'anilraj',
    age: '23',
    getInfo: function(){
        return `name: ${this.name} and age: ${this.age}`;
    }
};

const result1 = obj1.getInfo();
console.log("result1", result1);


// explicit binding
// achive by call applt and bindi method

let obj2 ={
    name: 'akshy',
    age: 24,
};

const result2 = obj1.getInfo.call(obj2);
console.log("result2", result2);


// default binding
//points to the global object.
function myFunc() {
    console.log(this)
}

myFunc();



// arrow function

//Simply put, when an arrow function is invoked, JS literally takes the this value from the outer function where the arrow function is declared.I repeat, the outer function, NOT the outer object in which it is defined.

//a.If the outer function is a normal function, this depends upon the type of binding of the outer function.

//b.If the outer function is an arrow function, JS again checks for the next outer function and this process continues till the global object.

console.log("+++++++++++++++++arrow function++++++++++++++");
// case 1  
function outer(){
    const inner = () =>{
        console.log(this); //this=> pointinf window
    };
    inner();
}
outer();

//case 2 => //this=> pointing its outer function's object which is obj3
const obj3 = {
    name: 'ravi',
    outer: outer
}
obj3.outer();

//case 3 => //this=> pointing its outer function's object which is obj3
const obj4 = {
    name: 'ravi',
    abc: function(){
        // this is abc function doing nothing
    }
}
outer.call(obj4);



// finding this laxicaly
// case 1
const func1 = () => {
    console.log(this)
};
func1();

// case 2
const obj5 ={
   func1: func1,
   inner: () =>{
    console.log(this);
   }
};
obj5.func1()
obj5.inner();

//case 3
const obj6 = {};
func1.call(obj6);
