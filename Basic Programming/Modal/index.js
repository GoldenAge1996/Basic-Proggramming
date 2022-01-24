const btn = document.querySelector("button")
const line = document.querySelector(".lines");
const sec = document.querySelector(".sec")

btn.addEventListener("click", ()=>{
    sec.classList.add("show")
})
line.addEventListener("click", ()=>{
    sec.classList.remove("show")
})