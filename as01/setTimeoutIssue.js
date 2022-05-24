// ep 17
console.log("setTimeout trust Issue");
// time could be excead 
// but setTimeout wait at least 5000 second
// this is Concurreny Model in Javascript

console.log("start");

setTimeout(function cd(){
    console.log("callback cb1")  // pure code ko chalaye to cb1 phle aayega
}, 5000);

console.log("end");


let startDate = new Date().getTime();
let endDate = startDate;

while(endDate< startDate + 10000){
    endDate =  new Date().getTime();
}

console.log("while loop ended")

// setTimeout function will never execute until while loop ended



//-----------------------------

console.log("start");
function cb(){
    console.log("callback cb2")  
}

setTimeout(cb(), 0);     //  still it will wait until GEC not poped out from call stack
                         // it will useful when we need to differ the code 
                         // example- if cb() is lesser importance then console.log("end")
                         //  or need cb() at the end of the page or any different forthcoming page
                         // setTimeout(cb(), 0) is used
 
console.log("end");




//--------------------------------------
// Concurreny Model in Javascript?
// with this model we can do async task in js (single threaded language)
// 1 single-threaded which means 2 statements cannot be executed simultaneously,
// 2 non-blocking which means execution of some code should not stop the execution 
//   of program because its too slow making the browser unresponsive,
// 3 asynchronous which means that 2 or more tasks can be done simultaneously,
// 4 concurrent means multiple computations can happen at same time.