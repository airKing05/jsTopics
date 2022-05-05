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
// because it is assigned to variable thats hoisting wont work here its ac like noramal varibale 
// "undefined" will assing to the express variable


// anonymous function
var anonymousFunction = function (){
    console.log("we an not use anonymous function directly")
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
        "case-1:passed function as argument"
    }
)


// case-1
function firstClassFunction2 (param1){
    console.log(param1)
};
function asArgument(){
    "case-2: passed function as argument"
}
firstClassFunction2(asArgument)


// case-3: returned as function
function firstClassFunction3 (){
    return function (){
        console.log("case-3:returned as function ")
    }
};

let returnedFunction1 = firstClassFunction3();
returnedFunction1();


// case-4
function firstClassFunction4 (){
    return function returnedFunction2(){
        console.log("case-4:returned as function ")
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


// IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("Immediately Invoked Function Expression")
})();
