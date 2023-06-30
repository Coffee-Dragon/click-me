const checkbox = document.querySelector("#checkbox");
// console.log(checkbox);
checkbox.addEventListener("change", ()=>{
    alert("CAUGTH ME");
})
document.addEventListener("mousemove", function (event){
    // console.log(event.x, event.y);
    const kvadratik = checkbox.getBoundingClientRect();
    const x1 = kvadratik.x;
    const y1 = kvadratik.y;
    const x2 = kvadratik.right;
    const y2 = kvadratik.bottom;

    if (event.x >= x1 && event.x <= x2 && event.y >= y1 && event.y <= y2) {

        console.log("POPAL");
    }

})

let clientHeight = document.documentElement.clientHeight;
let clientWidth = document.documentElement.clientWidth;

window.addEventListener("resize", ()=>{
    clientHeight = document.documentElement.clientHeight;
    clientWidth = document.documentElement.clientWidth;
    // console.log(clientHeight, clientWidth);
})



