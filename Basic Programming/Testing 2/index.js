const head = document.querySelector(".head");
const decrease =  document.querySelector(".decrease");
const reset =  document.querySelector(".reset");
const increase =  document.querySelector(".increase");
const btns =  document.querySelectorAll(".btn");

let idx = 0;
changeit()

increase.addEventListener("click", ()=>{
    btns.forEach(btn => {
        btn.classList.remove("good");
        btns[2].classList.add("good")
        changeit()
    });
    head.innerHTML = ++idx
   // head.style.color = "green"

 


})

decrease.addEventListener("click", ()=>{
    btns.forEach(btn =>{
btn.classList.remove("good")
    })
    head.innerHTML = --idx
    //head.style.color = "red"
decrease.classList.add("good")
changeit()

})
reset.addEventListener("click", ()=>{
    btns.forEach(btn =>{
        btn.classList.remove("good")
    })
    head.innerHTML = 0
   // head.style.color = "black"
reset.classList.add("good")
changeit()

})

function changeit(){
    if(idx < 0){
head.style.color = "red"
    }else if(idx = 0){
        head.style.color = "black"
    }else if(idx >0){
        head.style.color = "green"
    }
}

