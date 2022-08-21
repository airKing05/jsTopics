let nameObj = {
    firstname: "anilraj",
    lastname: "meena"
};
function getFullName(city, state, msg){
    console.log(`name is ${this.firstname} ${this.lastname} from ${city}, ${state} and he ${msg}`)
}
let finalName = getFullName.bind(nameObj, 'Bundi', 'Raj');
finalName('he is good boy by noraml bind')

// polyfill for bind method

// every function can access bind method 
// so for it we use prototype finalName2()
Function.prototype.myBind = function(...args){
    // this -> getFullName, we myBind called 'this' will point to the 'getFullName'
    // store this into variable
    let obj = this;
    // bind method return any other function, so
    // args2 passes the data from
    return function(...args2){ 
        // if we called finalName2() our getFullName() called
       // getFullName()
       // get argument like args[0] pointing the name

       //for the second parameter
       // remove first argument from entire array's of argument, remaining inside the params
       params = args.slice(1)
       //obj.call(args[0])
        obj.apply(args[0], [...params, ...args2])  // concat bot args and args2

       console.log(args[0], params)
    }

}
                // this.polyfill(object)
let finalName2 = getFullName.myBind(nameObj, 'Bundi', 'Raj');
finalName2('is bad boy');