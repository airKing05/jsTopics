// make promise, will resolved when button is clicked, and reject on button click

const mybtn = document.getElementById('mybtn');
const mybtn2 = document.getElementById('mybtn2');


const myPromise = new Promise((res, rej) => {
    mybtn.addEventListener('click', () => {
        res("success");
    })

    mybtn2.addEventListener('click', () => {
        rej("fail");
    })
  
});

// comment for question 2
// myPromise
// .then((resp) => console.log("btn clicked", resp))
// .catch((error) => console.log("error", error))




// make promise without "new Promise" key word

const promiseWithOutPromise = async function(){

    // 3. make promise pending
    const pending = await myPromise;
    return pending;

    // 2. always reject the promise
    // throw new Error('rejected')

    // 1. always resolved promise
    return "always resolved promise"

}

const promiseWithOutPromiseResult1 =  promiseWithOutPromise();
promiseWithOutPromiseResult1
.then((resp) => console.log("resolved", resp))
.catch((error) => console.log("error",error))


// step -3 without await it will be shown pending 
// step -4 we can use await out side of the function but the current file should be act like module, show add "type = 'module'" in script index.html
const promiseWithOutPromiseResult2 = await promiseWithOutPromise();
console.log("promiseWithOutPromiseResult2", promiseWithOutPromiseResult2)




// question 3
// how promise work?
const test = async function () {
    const a = 1;
    const b = 2;
    const pending = await myPromise;
    return pending;
}
test();

// controller of js engin come to 64 line, test() invoke,
// start executing the code line by line 
// comes to line 61 see await keyword, will wait for the promise resolved or reject
// assume resolved, comes myPromise promise with result through Event-loop to again line 61, 
//(function execution will not start gain from the line 58) 
// then controller moves to the line 62

