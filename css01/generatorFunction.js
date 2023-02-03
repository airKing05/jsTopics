console.log("generator function")
// generator are function, which could be stop while execution, can resume 
// star could be attached to function or generator function name *generator
function* generator(){
   console.log("generator  function");
   yield 20;
   yield 30;
   yield 40;
};
// it will return generator object => Object [Generator] {}
let result = generator();
// to resolve .next() , done: false means not completed=>   { value: 20, done: false }
console.log(result.next())  // { value: 20, done: false }
console.log(result.next())  // { value: 30, done: false }
console.log(result.next())   // { value: 40, done: false }
console.log(result.next())   // { value: undefined, done: true }



// with calculation
function *generator1() {
   
    let x = 5
    yield "this is first yield";
    yield x;
    console.log("in middle console, will call on middle same as line by line")
    let y = {name: 'anilraj'}
    yield y;
    console.log("this console will execute after the last execution, just before { value: undefined, done: true }");
};

let result1 = generator1();
// { value: 'this is first yield', done: false }
console.log(result1.next())  // { value: 5, done: false }
console.log(result1.next())   // { value: { name: 'anilraj' }, done: false }
console.log(result1.next())   // { value: undefined, done: true }


// we want only value
let resultValue = generator1();
console.log(resultValue.next().value)
console.log(resultValue.next().value)
console.log(resultValue.next().value)
console.log(resultValue.next().value)



// generator ?? to generate dynamic id 
// can be achive by normal function but advantage to use generator function is that we do not need to call it again and agin, it will load in memory in once
// to will be good to use, for performance

function* generateID(){
let i =100;
while (true) {
    i++
    yield i
}
};
let resultGenerateID = generateID();

function getID(){
    console.log(resultGenerateID.next())
    let newID = document.getElementById('newID');
    newID.innerText = `GFx${resultGenerateID.next().value}`;
    // console.log(newID)
}


