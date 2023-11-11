let button=document.querySelector(".button1");
let isTrue=false;
button.addEventListener("click",function (e){
let element=document.querySelector(".container");
if(!isTrue){
    element.classList.remove("background_theme");
    button.classList.remove("ri-sun-line")
    button.classList.add("ri-moon-fill")

    // element.classList.add("container2")
    // element.classList.remove("container");
    isTrue=true;
}else{
    element.classList.add("background_theme");
    button.classList.remove("ri-moon-fill")
    button.classList.add("ri-sun-line")

    // element.classList.add("container");
    // element.classList.remove("container2");
    isTrue=false;
}

})