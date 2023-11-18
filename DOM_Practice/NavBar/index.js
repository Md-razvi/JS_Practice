let menu=document.querySelector(".cl");
let Open=document.querySelector(".Open");
menu.addEventListener("click",(e)=>{
    console.log("ok")
    setTimeout(()=>{
        Open.classList.toggle("Menu")
    },1000)
    

})