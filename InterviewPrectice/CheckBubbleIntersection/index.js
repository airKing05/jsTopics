const main = document.getElementById('main');

const findRandomNumber = () =>{
    const randomValue = Math.floor(Math.random() *( (200 - 50) + 50))  // Math.floor(Math.random()*100);
    console.log("randomValue", randomValue)

    // if (10 <= randomValue && randomValue <= 100){
    //     return randomValue;
    // }
   return randomValue;
};

const distanceOfCenterToCenter = (circlesDimensions) => {
    const [c1, c2] = circlesDimensions;

    const {x : x1, y: y1,} = c1;
    const { x: x2, y: y2,} = c2;
   
    const distanceOfCircle = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2) 
    
    return distanceOfCircle;
}

const checkTheInterSectionOfCircle = (c1c2, circlesDimensions) => {
    const [c1, c2] = circlesDimensions;

    const { r: r1 } = c1;
    const { r: r2 } = c2;

    if (c1c2 <= r1 - r2) {
        return 'Circle B is inside A';
    } else if (c1c2 <= r2 - r1) {
        return 'Circle A is inside B.';
    } else if (c1c2 < r2 + r1) {
        return 'Circle intersects each other.';
    } else if (c1c2 === r2 + r1) {
        return 'Circle A and B are in touch with each other.';
    } else {
        return 'Circle A and B do not overlap';
    }
}

let countChildElement = 0;
const circleDimension = [];

window.onload = function(){
    main.addEventListener('click', (e) => {
       console.log("e", e)
       const radius =  findRandomNumber()
        const { clientX, clientY, offsetX, offsetY } = e;
        const circleOne = document.createElement("div");
        circleOne.setAttribute("class", "circle");

        const top = offsetY - radius;
        const left = offsetX - radius;
        const width = radius * 2;
        const height = radius * 2;

        const circle = {
            r: radius,
            x: offsetX,
            y: offsetY
        }

        if (radius){
            circleDimension.push(circle);
        }

        circleOne.style.cssText = `
           display : flex;
           position: absolute;
           width: ${width}px;
           height: ${height}px;
           border: 1px solid gold;
           border-radius: 50%;
           top: ${top}px; 
           left: ${left}px;
        `

       
        main.appendChild(circleOne);
        countChildElement +=1;

        if (countChildElement>2){
           
            main.removeChild(main.firstElementChild);
            circleDimension.shift();
            countChildElement = 2;

            if (radius) {
                // now calculate the distance C1&C2
                const c1c2 = distanceOfCenterToCenter(circleDimension);

                // check that circle is circle intersecting
                const isCircleInteresting = checkTheInterSectionOfCircle(c1c2, circleDimension);
                console.log("c1c2", c1c2, isCircleInteresting)
            }
   
        }
    })

}