console.log('functionInvocationVariableEno')
// function invocation and variable enviroment 

var a = 1;
aa();
bb();
console.log(a)

function aa(){
    var a = 10;
    console.log(a)
}

function bb(){
    var a = 100;
    console.log(a)
}