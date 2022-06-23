console.log('spread and rest operator')


// in array
// rest operator
// sending multiple data as argument and receive combine data as parameter in from of array

function rest(a,b,c, ...other){
 console.log(other)
 return {a, b, c}
}
const restResult = rest(1,2,3,4,5,6);
console.log("restResult",restResult)


// spread operator
function spread(name1, name2, name3, village){
    return {name1, name2, name3, village}
};
let arr = ["anil", "anilraj", "anilrajmeena", "chandanHeli"]
// before es6
const spreadResult = spread(arr[0], arr[1], arr[2]);
console.log("spreadResult",spreadResult);
// after es6
const spreadResult1 = spread(...arr);
console.log("spreadResult1", spreadResult1)

// in object
// rest operator
 let student = {
    name: "anilraj",
    age: 25,
    skill: ["javaScript", "RestJs"],
    city: "Bundi"
 };
// array destructing then inside it rest
const {age, ...other} = student;
console.log("student", other);


// spread 
let teacher = {
    ...student,
    age:35,
    name: "anilrajMeena"
}
console.log("teacher",teacher)
