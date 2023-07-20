const checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("change", ()=>{
    alert("CAUGTH ME");
})

const kvadratik = checkbox.getBoundingClientRect();
let x1 = kvadratik.x;
let y1 = kvadratik.y;
const width = kvadratik.width;
const height = kvadratik.height;

document.addEventListener("mousemove", function (event){
    const x2 = x1 + width;
    const y2 = y1 + height;
    
    if (event.x >= x1 && event.x <= x2 && event.y >= y1 && event.y <= y2) {
        x1 += 10*event.movementX;
        y1 += 10*event.movementY;

        if (y1 < 0 || x1 < 0 || y2 > clientHeight || x2 > clientWidth ) {
            y1 = clientHeight/2 - height/2;
            x1 = clientWidth/2 - width/2;
        }

        checkbox.style.top = `${y1}px`;
        checkbox.style.left = `${x1}px`;
    }
});

let clientHeight = document.documentElement.clientHeight;
let clientWidth = document.documentElement.clientWidth;

window.addEventListener("resize", ()=>{
    clientHeight = document.documentElement.clientHeight;
    clientWidth = document.documentElement.clientWidth;
})
