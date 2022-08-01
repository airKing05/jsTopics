console.log("this is object")

// Defination: it is colletion of related data or releted function
// can be stored in key value pair
// can be store multiple data types in one single object


// how to create object?
let user = {};
let member = new Object();
console.log(user)
console.log(member)

// how to add properties?
user.name = "anilraj";
member.name = "meena";
console.log(user)
console.log(member);

// update object which is defind by const variable type
// we  are update key value not a original object name
const user1 = {
    name: 'anilraj'
};
user1.name = "anilrajMEENA"
console.log(user1);

// multiple property in object
// How to add dynamic key
let key = 'address';
let user2 = {
    name: 'anilraj',
    age: 25,
    getData: function(){
        // hoisting will also work
        return `${this.city}`
    },
    nestObj: {
        name: 'inner man'
    },
    isDeveloper : true,
    // dynamic key access like that
    [key]: "Bundi, Rajasthan, India"
}

// hoisting
user2.city = "Bundi"
// space between name
user2['pin code'] = "323002"
console.log(user2['pin code']);

// get dynamic key in console
console.log(user2)


// sort hand properties
let phone = 1234567890;
let email = 'anil@gmail.com';
let user3 = {
    name : 'anilraj',
    phone: phone,
    email  //can be written like, by es-6 if key value pair same
}
console.log(user3)

// check that value is present in object or not 
console.log('name' in user3)

// loop in object
for (key in user3){
  console.log(`${key}'s value is: ${user3[key]}`)
}

// sum in object
// find the total salary of employ
let employ = {
    anil: 200,
    anilraj: 400,
    anilrajmeena: 600
};
let total = 0;
for (key in employ) {
   total = total + employ[key]
}
console.log("total salary: ", total)