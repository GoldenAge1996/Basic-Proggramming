const btn = document.querySelector(".contain");
const nav = document.querySelector("nav")


btn.addEventListener("click", function(){
    nav.classList.toggle("show")
    btn.classList.toggle("show")
})