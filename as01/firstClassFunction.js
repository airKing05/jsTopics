// ep 13
console.log("question related to the function");

// function statement or function declaration
function statement(){
    console.log("function statement")
};
statement();

// function expression
var expression = function(){
    console.log("function expressing")
};
expression();
// because it is assigned to variable thats hoisting wont work here its act like normal variable 
// "undefined" will assing to the express variable


// anonymous function
var anonymousFunction = function (){
    console.log("we can not use anonymous function directly")
}


// named function expression
var named = function xyz(){
    console.log(xyz)
}; 
named(); // output
// xyz();  // error, xyz() is not in the global scope so can not access it here,
        //  it is in local memory scope we can access it's inside of it  
        // it will return whole function 



// parameter and arguments
var parameterAndArgument = function(parameter1){
    console.log("parameter and arguments")
}; 
let arguments = "arguments" 
parameterAndArgument(arguments)


// first class function
// case-1
function firstClassFunction1 (param1){
     console.log(param1)
};
firstClassFunction1(
    function (){
        "case-1:passed function as anonymous argument"
    }
)


// case-2
function firstClassFunction2 (param1){
    console.log(param1)
};
function asArgument(){
    "case-2: passed function as named argument"
}
firstClassFunction2(asArgument)


// case-3: returned as function
function firstClassFunction3 (){
    return function (){
        console.log("case-3:returned as anonymous function ")
    }
}

let returnedFunction1 = firstClassFunction3();
returnedFunction1();


// case-4
function firstClassFunction4 (){
    return function returnedFunction2(){
        console.log("case-4:returned as named function ")
    }
    
};

let returnedFunction2 = firstClassFunction4();
returnedFunction2();



// first class citizen function
// all of them functionality will be same as first call function
// add on we can stored a function to any variable


var firstClassCitizen = function(){
    console.log("first class citizen")
};

firstClassCitizen();



// HOC (Higher order function)
// in JS Function are first call function/Citizen 
// so they can be pass to any other function as argument or return by any other function
// or both could be possiable called HOC

function hoc(argFunction){
    console.log("argFunction:", argFunction)
    let returnedFunction = function(){
        console.log("this is returnedFunction")
    }
    return returnedFunction;
}
let result = hoc(function(){
    "passed as argument"    
})

// returnedFunction called
result();



// IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("Immediately Invoked Function Expression")
})();
