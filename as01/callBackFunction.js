// ep 14
console.log("callBack function");


//---------------------------------------------------------
// callback as a asynchronous tak
setTimeout(function () {
    console.log("callback function in side the setTime out")
}, 5000);


//-----------------------------------------------------------
// callback function function that take any other function as an argunment know as call back function

function x(y) {
    console.log("x called");
    y()
}
x(function y() {
    console.log(" y called")
})

// here y() is callback function passed into the x()
// whenever x() want to call y() can do it


//----------------------------------------

// event listener

// document.getElementById("clickMe")
//     .addEventListener("click", function () {
//         console.log("button is clicked")
//     })



//---------------------------------------
// closure along with event listener

function attachEventListener() {
    let count = 0;
    document.getElementById("clickMe")
        .addEventListener("click", function xyz() {
            console.log("button is clicked", count++)
        })
}
attachEventListener();



//---------------------------------------
// garbage collector and remove event listener

// we need it because even if we are not using the the "count" it's in side the memory and 
// event listener ar still added to it which make application heavy 
// because these type of event listener could be many more in an App/ Web like- onchange/ mouse-hover/ scrolling/ keyup etc..
// so for every event listener there is closure which is consuming lots of memory 
// that why need to remove that thing

// if we remove "attachEventListener()" event listener then all the variable which was hold by this closure 
// are garbage collector now