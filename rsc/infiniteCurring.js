// fie#01


function add(a){
    return function(b){
        return b? add(a+b): a;
    }
}

const result = add(2)(3)(4)(5)();
console.log(result);