// polyfill for bind method


let user = {
    name: 'anilraj',
    age: 25
};

let getDetails = function(city, state, country){
    console.log("name: " + this.name + " age: " + this.age + " city:" + city + " state: " + state)
    // + " state: " + state + " country: ", country
}
getDetails.call(user, "Bundi");

Function.prototype.myCall = function(context, args){
   context.func = this;
   context.func(...args)
}

getDetails.myCall(user, ["Bundi", "Raj"])


