const user = {
    name: 'anilraj',
    lastName: 'meena',
};

function getName(city, state) {
    console.log("name:", this.name, this.lastName, "from:", city, state);
}

getName.call(user, "Bundi", "Rajasthan");

//polyfill: myCall

Function.prototype.myCall = function(context, ...args){
    // context is user object 
    context.func = this // this is representing to the getName function
    //console.log(context) // func will be there in context now
    // we do not need to pass context into function
    context.func(...args)
}

getName.myCall(user, "Bundi", "Rajasthan");

