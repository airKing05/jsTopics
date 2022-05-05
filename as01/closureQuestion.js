// ep 12
console.log("closures question video");


// call in other way

function z(){
    var b= 1000;
    function x(str) {
        function y() {
            console.log(a, str ,b);   // y() forms a closure along this x() scope as wel as z() scope also
        }
        let a = 4;   // also form closure here with let as wel as var
                     // if we did not have this line here y() search a with it's parent's lexical environment
                     // witch is "a=10"

       return y;
    }
    let a = 10;      // conflicting the inner variable name here? y() forms a closure along z()
                     // but want get this value because a=4 already presented in inner scope
                     // console(a) is referring inner "a" witch inside to x()
                     // also "a " not present here y() search a with it's grandparent's lexical environment
                     // also not found here it show that a is not-de-find
    return x;
}
let a = 100;          // even does not care here also;  
// var close = z()("hello")()
// var close = z()("hello world!");
// close();


// ---------------------------------------------------------------

//  Data Hiding & Encapsulation in JavaScript?
// we can not count data out side of counter(), because it is enclosed inside the counter(), that is data hiding

function counter(){
    let count = 0;
    return function incrementCont(){
        count++;
        console.log(count);
    }
};

// var counter1 = counter();
// counter1();   //1
// counter1();   //2

// var counter2 = counter();  // this is seprate form counter1()
// counter2();   // 1 new

//-----------------------------------------------------------------------------


// optimize version of the code
// for this will create constructor function()
function CounterX(){
    let count = 0;
    this.incrementCont =function(){
        count++;
        console.log(count);
    };
    this.decrementCont =function(){
        count++;
        console.log(count);
    };
};

// var counterX1 = new CounterX(); // this is way of creating the constructor
// counterX1().incrementCont();
// counterX1().decrementCont();


//-------------------------------------------------------



// garbage collector and smartly garbage collector(v-8 engine)


function garbageA(){
    var x =0; var z =10;
    return function garbageB(){
        console.log(x);
    }
}
var y = garbageA();
// now garbageA() is moved out form the call stack, 
// so x and z will be garbage collector until y is not called
// because x is form a closure with garbageB()
// but z will be gone out by smartly garbage collector v-8 engine

y();
// after it every thing will be deleted






//The Advantages of Closures In JavaScript?
//We can have private variables that are available even after a function task is completed by employing closure.
//We can store data in a separate scope and share it only when it’s needed with a function closure.

//The Disadvantages Of JavaScript Closures?
//Closures consume a lot of memory. Creating a function within a function causes memory duplication, which slows down the application.
//Closures are not garbage collected when functions are internally connected. Hence the memory cannot be garbage collected as long as the closures are active. For instance, if we utilize closure in ten locations, the memory will be held until all ten processes are completed, resulting in a JavaScript closure memory leak.