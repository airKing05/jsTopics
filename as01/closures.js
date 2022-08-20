// ep 10, 11
console.log("closures video");

// function x() {
//     var a = 4;
//     function y() {
//         console.log(a);   // is referring to the reference of 'a' 
//                            // function remember the memory location of a
//     }
//     //var a = 100
//     y();
//     var a = 10;           // her a value shadowed previous
    
// }
// x(); 


// function z(){
//     var b= 1000;
//     function x() {
//         var a = 4;
//         function y() {
//             console.log(a ,b);   // y() forms a closure along this x() scope as wel as z() scope also
//         }
//         y();
        
//     }
//     x();
// }
// z();







// function abc (){
//     for(var i = 1; i<=5; i++){   
//         setTimeout(function(){
//             console.log(i) // i pointing the  reference of i not value of i
//         }, i*1000)
//     }
//     console.log("hello")
// };
// abc();

// remove it from its wrong here i is declared with var keyword so whenever the loop itrate the value of i is showdding the previous value
// when function run first time make a copy of function attach the time to it and get a reference of i
// there for  5 function has been created with timer attached to them and  make same reference of i 
// because of environmet of the all five function is same 
// setTimeout store all the function some where

// after printing the "hello"; js does not wait for setTimeout's time; it will continously run the code
// so the for loop itrate 5 time therefor i value become 6
// after the time expired js trying to get exicute those 5 copies of functions
// all of them are referencing the same memory location of i which is now 6




// function abc (){
//     for(let i = 1; i<=5; i++){   
//         setTimeout(function(){
//             console.log(i) // i pointing the  reference of i not value of i
//         }, i*1000)
//     }
//     console.log("hello")
// };
// abc();


//{i=1}
//{i=2}
//{i=3}
//{i=4}
//{i=5}

// for every itration i vale is new setTimeout form function from a closure with every new i
// for i =1, setTimeout form function from a closure with i=1 (bounded ) and send to setTimeout with time
// five copy of i boud with five callback function
// in this case each and every time when setTimeout function called i referring the different memory location of i





function abc (){
    for(var i = 1; i<=5; i++){ 
        function close(j){
            setTimeout(function(){
                console.log(j)
            }, j*1000)
        }  
       close(i)
    }
    console.log("hello")
};
abc();   


// creating new copy of i created by close function
// every time close function called it has new copy of i 
// this new i vale has been bounded with setTimeout each and every time