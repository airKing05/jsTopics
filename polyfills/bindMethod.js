const user = {
    name: 'anilraj',
    lastName: 'meena',
};

function getName(city, state, country){
    console.log("name:", this.name, this.lastName, "from: ", city,",",state, ",", country);
}

let myName = getName.bind(user, "Bundi", "Rajasthan");
myName("India");


// polyfill: myBind
//some how we need to add our myBind to window object so very function can easily access myBind method (add to prototype of function)
// we also need to access user and other parameters as a argument to my myBind method (get as ...args)
Function.prototype.myBind = function(...args){
    // now to execute the getName we need it inside the myBind method(this is pointing to the getName)
    let func = this;
    // bind method return a function, so myBind should me return
    return function(...args2){
        // now call our getName as a func.call
        // pass a user object to it , which should be first argument of the "...args" array (get first element from the array)
        let object = args[0]
        // r1- myBind method should be accept some arguments (except object )
        let params = args.slice(1)
        // getting arguments as ar array so we need to spread them, (apply method and spread opraters)
        func.apply(object, [...params, ...args2])
    }

}

// r1- bind method also expect some argument, we can send them as params to myBind
let myName2 = getName.myBind(user, "Bundi");
// r2- bind method return a function who can also accept arguments, e can send them as params to myName2
myName("Rajasthan", "India");
