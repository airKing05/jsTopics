console.log("eventDelegation")

//example-1
document.querySelector("#categories")
.addEventListener('click', (e) =>{
    if(e.target.nodeName === 'LI'){
        window.location.href = '/' + e.target.id;
    }
});

//example-2
const example2 = document.querySelector('#from');
example2.addEventListener('click', (e) => {
    console.log(e)
});