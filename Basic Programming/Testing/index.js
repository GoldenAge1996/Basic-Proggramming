const bodyq = document.body;

const btn = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const head = document.querySelector("span");

const colors = ["Red", "Blue", "Green" ];

let idx = 0

changeIt()
btn.addEventListener("click", function(){
 
       idx++

       if(idx > 2){
           idx = 0
       }
       changeIt();
    });
   

    function changeIt(){
        head.innerText = colors[idx]
        bodyq.style.backgroundColor =colors[idx]
    }





/*function getRandom(){
    return colors[ Math.floor(Math.random()*3)]
}*/

btn2.addEventListener("click", ()=>{
    head.innerText = "white"

    bodyq.style.backgroundColor = "white"
})




