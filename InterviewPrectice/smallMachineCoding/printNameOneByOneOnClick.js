console.log(
    "file called"
)

// replace the hello to given array's names
const namesList= ['abhi', 'mordhat', 'aman', 'jen', 'jd'];

const headerBtn = document.getElementById('headerBtn');
let count = 0;
headerBtn.addEventListener('click', () => {
    const lengthOfNamesList = namesList.length;
    if (count < lengthOfNamesList){
        headerBtn.innerHTML = namesList[count];
        count = count + 1; 
    }else{
        count = 0; 
        headerBtn.innerHTML = namesList[count];
    }
   
})