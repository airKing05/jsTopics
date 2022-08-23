const user = {
    name: 'anilraj',
    lastName: 'meena',
};

function getName(city, state) {
    console.log("name:", this.name, this.lastName, "from: ", city, ",", state);
}

getName.apply(user, ["Bundi", "Rajasthan"]);


// polyfill: myApply

Function.prototype.myApply = function(context, args){
    // context is user object 
    context.func = this 
    //console.log(context) // func will be there in context now
    // we do not need to pass context into function 
    context.func(...args)
   
}

getName.myApply(user, ["Bundi", "Rajasthan"]);