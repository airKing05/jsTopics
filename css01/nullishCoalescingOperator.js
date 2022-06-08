console.log("Nullish Coalescing Operator in")

// part of ES 2020
// Q1 what is nullish coalescing operator?=> ??
// Q2 use of it?=> to check null and undefine value


let user = {
    student:{
        name: "",
        age: 0
    }
}

// this is pipe operator in fist condition is false then the second will run
// it will check boolean value, undefine, null, empty string
console.log(user.student.name || 'unknown- from pip')
console.log(user.student.age || 'unknown- from pip')


// nullish coalescing operator
// it will work in case of name is undefine and null
console.log(user.student.name ?? 'unknown- from nullish')
console.log(user.student.age ?? '21 unknown- from nullish')
