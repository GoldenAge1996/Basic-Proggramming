const containers = document.querySelectorAll(".container")

const leftBtns = document.querySelectorAll(".left")
const rightBtns = document.querySelectorAll(".right")
const suss = document.querySelectorAll(".sus")

let idx = 0
changeIt()
rightBtns.forEach(rightBtn => {
    rightBtn.addEventListener("click", ()=>{
        idx++
        if(idx> containers.length-1){
            idx= 0
        }
        changeIt()
    })
});

leftBtns.forEach(leftBtn => {
    leftBtn.addEventListener("click", ()=>{
        idx--
        if(idx < 0){
            idx= 2
        }
        changeIt()
    })
     
});

suss.forEach(sus => {
    sus.addEventListener("click", ()=>{
        idx++
        if(idx> containers.length-1){
            idx= 0
        }
        changeIt()
    })
});


function changeIt(){
    containers.forEach(contain => {
       contain.classList.remove("show");
       containers[idx].classList.add("show") 
    });
}