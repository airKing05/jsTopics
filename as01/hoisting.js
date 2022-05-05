



var a= 4;

// hoisting only this proper function declaration
function agetName() {
    console.log("javascript")
};

// hoisting work like na normal variable only => undefined
var agetName1 = function() {
    console.log("javascript")
};

var agetName2 = () => {
    console.log("javascript")
};

agetName();
console.log(a)
console.log(agetName)



