const asks = document.querySelectorAll(".ask");
const brns = document.querySelectorAll(".lines");

brns.forEach(brn => {
   brn.addEventListener("click", ()=>{
  
      brn.parentNode.classList.toggle("show")
   } )
});




