const contents = document.querySelectorAll(".content");
const lists = document.querySelectorAll("nav ul li");

lists.forEach((list, idx) => {
    list.addEventListener("click", ()=>{
      
        listRemove()
        contentRemove()
list.classList.add("active")
        contents[idx].classList.add("show")
    })

 
});

function contentRemove(){
    contents.forEach(content => {
       content.classList.remove("show") 
    });
}

function listRemove(){
    lists.forEach(list => {
       list.classList.remove("active") 
    });
}