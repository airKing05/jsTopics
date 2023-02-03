// polyfill for bind method


const obj = {
    name: 'anil',
    age: '25'
}

function getName(city, state){
   return `${this.name} : ${this.age}: ${city}, ${state}`
}

const result = getName.bind(obj, "Bundi" );
//console.log(result("Rajasthan"))

Function.prototype.myBind = function(...args){
    let func  =this
    return function(args2){
        let object = args[0];
        let reamingArg = args.splice(1);
        console.log(reamingArg)
        return func.call(object, ...reamingArg, args2)
    }
}

const result1 = getName.myBind(obj , "Bundi");
console.log(result1("Rajasthan"))