// fie#01
const calc = {
    total: 0,
     add: function(arg){
        this.total+= arg;
        return this; // need to retunr whole calc
      },
    mult: function (arg) {
        this.total*= arg;
        return this;
    },
    sub: function (arg) {
        this.total-=arg;
        return this;
    }
}
const result = calc.add(10).mult(1).sub(20).add(30);
console.log(result.total);