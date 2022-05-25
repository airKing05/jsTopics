// ep 19
console.log("map filter and reduce method");

// map method is use to transform a array into new form 
// it will return new array

const arr = [5, 3, 6, 2, 7, 15, 16];

// find binary 
function binary(i) {
    return i.toString(2)
}
const binaryArr = arr.map(binary);
console.log("binaryArr map result", binaryArr)

// filter method is use to filter out some element form an array  
// it will return new array
// usage - odd/even, grater/less then, prime

// find >5
function graterThen5(i) {
    return i > 5
}
const graterThen5Arr = arr.filter(graterThen5);
console.log("graterThen5 filter result", graterThen5Arr)


// reduce method return single value 
// it does not change original array
// usage - sum, max or accumulate arr

// find sum
function sum(acc, curr) {
    // acc= accumulate in array 
    // curr = current vale of array or like arr[i]
    return acc = acc + curr
}
const sumReduce = arr.reduce(sum, 0);
// reduce take two argument one function and other one is 
// initial value of accumulate
console.log("sumReduce reduce method result", sumReduce)

// find max
const maxByReduce = arr.reduce(function (acc, curr) {
    if (curr > acc) {
        acc = curr;
    }
    return acc;
}, 0)

console.log("max By Reduce", maxByReduce);



// advance or real life example of map filter and reduce
const user = [
    {
        id: 1,
        name: 'anilraj',
        address: 'bundi',
        age: 25
    },
    {
        id: 2,
        name: 'mordhvaj',
        surname: 'kota',
        age: 22
    },
    {
        id: 1,
        name: 'sonu',
        surname: 'kota',
        age: 28
    },
    {
        id: 1,
        name: 'jeetu',
        surname: 'baran',
        age: 25
    }
]

// get name of the all users

const getName = user.map(item => item.name);
console.log(getName)

// count total number of people according to their age
// {22: 1, 25: 2, 28: 1}
// will use reduce here because we want to reduce our list in to a 
// particular value which is an object 

const totalNumberOfUserAccordintToTheirAge = user.reduce((acc, curr) => {
    if (acc[curr.age]) {
        // the partculer age person already exist in the object
        acc[curr.age] = ++acc[curr.age];
    } else {
        // initial case no person will be there so get their age count
        acc[curr.age] = 1
    }
    return acc;
}, {})
// initial value of acc = {}

console.log("totalNumberOfUserAccordintToTheirAge", totalNumberOfUserAccordintToTheirAge)


// get name of user who's age <25;
// here will use filter and then chain it with map

const getNameByAge = user.filter(x => x.age < 25).map(item => item.name)
console.log("getNameByAge", getNameByAge)

// by reduce method
const getNameByAgeByReduce = user.reduce((acc, curr) =>{
    //console.log(acc)
  if(curr.age<25){
      //acc = [...acc, curr.name]
      acc.push(curr.name)
  }
  return acc;
}, []); // initial put acc as []
console.log("getNameByAgeByReduce", getNameByAgeByReduce)