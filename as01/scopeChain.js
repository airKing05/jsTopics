console.log('scope\\ scope chain\\ lexical Environment')


function a(){
    var b = 10;
    var bb= 100;
    c();
  
  
    function c(){
        console.log(b)
    }
}
var aa=1000
a();
var aaa =1000000
