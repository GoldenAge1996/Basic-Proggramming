const contain = document.querySelector(".contain");
const contains = document.querySelector(".contains");
const section = document.querySelector(".section");


goin()

setTimeout(goin, 2000);

contain.addEventListener("click", function(){
section.classList.add("show");
})

contains.addEventListener("click", function(){
    section.classList.remove("show");
    })

  

    function goin(){
        contain.classList.add("show")
    }