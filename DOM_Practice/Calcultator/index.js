let isTrue=true;
let obj="";
function evaluate(a){
    try{
         return eval(a);
    }
    catch(err){
        return undefined;
    }
}
function Working(){
    let buttons=document.querySelectorAll(".keys");
    let Display=document.querySelector("#display");
    let iconbtn=document.querySelector(".btn1");
    let body=document.querySelector("body");
    let calc=document.querySelector(".calculator")
    // <i class="ri-sun-line"></i>
    iconbtn.addEventListener("click",(e)=>{
        calc.classList.toggle("caltheme")
        iconbtn.classList.toggle("themebtn")
        body.classList.toggle("background")
        buttons.forEach((el)=>{
            el.classList.toggle("keystheme")
        })
        // buttons.classList.toggle("keystheme")
    if(isTrue)
    {
        iconbtn.classList.remove("ri-moon-fill");
        iconbtn.classList.add("ri-sun-line")
        isTrue=false;
    }else{
        iconbtn.classList.remove("ri-sun-line");
        iconbtn.classList.add("ri-moon-fill")
        isTrue=true;
    }    

    })    
 buttons.forEach((el,index)=>{
    el.addEventListener("click",(e)=>{
        let v=e.target;
        if(v.innerText=="C"){
            obj="";
            Display.innerText=obj;    
        }else if(v.innerText=="="){
            // obj="";
            let a=evaluate(obj);
            if(a!=undefined)
            {
                obj="";
                Display.innerText=obj+a;
            } 
            else{
                 console.log("Not Working");
                obj="";
                Display.innerText=obj;
            }

        }else if(v.innerText=="AC"){
            obj=""+0;
            Display.innerText=obj;

        }
        else{
            let num=v.innerText;
            switch(num){
                case '+':
                case "-":
                case "/":
                case "%":
                case "*":
                obj=obj+" "+v.innerText+" ";
                break;
                default:
                obj=obj+v.innerText;
            }
            Display.innerText=obj
        }

    })
})

}
Working();