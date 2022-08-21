

console.log("Async/ Await, Promises , callback");

// with any of these 
let data= [
    {name: "anilraj", work: "web developer"},
    { name: "akshay", work: "android developer" },
]

// get data by setTimeout 
function getData(){
    let outPut = ""
    setTimeout(() => {
        data.forEach((item, index) =>{
            outPut += `<li>${item.name}</li>`
        }) 
        document.body.innerText = outPut;
    }, 3000);
};

//create data 
function createData(newData){
setTimeout(() => {
    data.push(newData)
}, 2000);
}
//getData();
//createData({name: "vishal", work: "student"}); // iska time get se come hoga to newdata bhi dom me show hoga


// callback
// if first getData ka time kam hi hot to callback ki help se 
function getData1() {
    let outPut = ""
    setTimeout(() => {
        data.forEach((item, index) => {
            outPut += `<li>${item.name}</li>`
        })
        document.body.innerText = outPut;
    }, 1000);
};

//create data 
function createData1(newData, callback) {
    setTimeout(() => {
        data.push(newData);
        callback(); // getData1()
    }, 2000);
}
// pass getData1 as argument and receive as parament in form of callback createData1 function so 
// createData1({ name: "vishal", work: "student" }, getData1);


// promises
function getData2() {
    let outPut = ""
    setTimeout(() => {
        data.forEach((item, index) => {
            outPut += `<li>${item.name}</li>`
        })
        document.body.innerText = outPut;
    }, 1000);
};

//create data 
function createData2(newData) {
   return new Promise((resolve, rejects) =>{
       setTimeout(() => {
           data.push(newData);
           let error = false;
           if (!error) {
               resolve()
           } else {
               rejects("some thing went wrong")
           }
       }, 2000);
    })
   
}
createData2({ name: "vishal", work: "student" }).then(getData2).catch(err => console.log(err));



// async / await
// sequnce is not important

// jb tak createData2 apna kaam pura nahi kar leta tab tak start wait krega fir call hoga
async function start(){
  await  createData2({ name: "mordhvaj", work: "Bsc" })
};
 start();
