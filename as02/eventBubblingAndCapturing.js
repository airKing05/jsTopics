console.log("this even bubbling")


document.querySelector('#grandParent')
    .addEventListener('click', () => {
        console.log("grand parent clicked")
    }, true); //capturing, //capturing, //bubbling

// by default useCapturing value is false/ bubbling

document.querySelector('#parent')
    .addEventListener('click', (e) => {
        console.log("parent clicked")
        // to stop the event in bubbling
        e.stopPropagation();
    }, true) // bubbling, //bubbling, //capturing

document.querySelector('#child')
    .addEventListener('click', (e) => {
        console.log("child clicked")
         // to stop the event in capturing
        e.stopPropagation()
    }, true) // capturing, //bubbling, //capturing

// top me capturing hai to phle capturing cycle complete hogi get bubbling wala callback call hoga
// if top hi capturing ho or last dono bubbling hoto, phle capturung, second wale ko check krega ydi capturing nahi hai to aage wale jake usko check krega, isme bhi ydi false hai to phle child hi call hoga yha se event bubbling ki cycle start ho jayegi
// third case me parent>child>grandParent
// 4th case me child>parent>grandParent


// stop propagation cases
// is jgh pr propagation laga huaa hai vha par aake ruk jayega
// for bubbling
// 1st case => child>parent

// for capturing
// 1st case => child>parent