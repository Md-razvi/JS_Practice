let arr=JSON.parse(localStorage.getItem("data"))||[];

//  localStorage.clear()
window.onload=(e)=>{
    working()
    setTimeout(()=>{
        Display(arr)},2000)
    // Display(arr)
 };
function working(){
    let Title=document.querySelector(".title");
    let desc=document.querySelector(".desc");
    let btn1=document.querySelector(".AddToList");
    // let btn2=document.querySelector(".Edit");
    let btn5=document.querySelector(".clear") 
    btn1.addEventListener("click",(e)=>{
        e.stopImmediatePropagation();
        let arr2=(arr)|| [];
        //  console.log(arr2)
         let Obj={Title:Title.value,Desc:desc.value};
        arr2.push(Obj);
        localStorage.setItem("data",JSON.stringify(arr2));
        let arr1=JSON.parse(localStorage.getItem("data"))
        Title.value="";
        desc.value="";
        Display(arr1)
        

    })
    // btn2.addEventListener("click",(e)=>{


    // })
    btn5.addEventListener("click",(e)=>{
    // let empty=JSON.parse(localStorage.getItem("data"))||[]
    localStorage.clear();
    let body=document.querySelector("tbody");
    body.innerHTML=null;
    arr=[];
   e.stopImmediatePropagation();

    })

}
 function Display(arr){
    console.log(arr)
    let body=document.querySelector("tbody");
    body.innerHTML=null;
    arr.forEach((element,index,array)=> {
    let row=document.createElement("tr");
    let td1=document.createElement("td");
    td1.textContent=element.Title;
    let td2=document.createElement("td");
    td2.textContent=element.Desc;
    let td3=document.createElement("td");
    let btn3=document.createElement("button");
    btn3.innerText="Delete";
    btn3.addEventListener("click",function(e){
        // e.stopImmediatePropagation();
        Adjustment(e,index);
    })
    btn3.setAttribute("class","btntd")
    let btn4=document.createElement("button");
    btn4.innerText="Edit";
    btn4.addEventListener("click",function(e){
        this.setAttribute("display","inline")
        Editable(element,index,array)
        // e.stopImmediatePropagation();
    })
    btn4.setAttribute("class","btntd")
    td3.setAttribute("class","td3")
    td3.append(btn3,btn4)
    row.append(td1,td2,td3);
    body.append(row);
        
    });
    
}
function Adjustment(e,a){
//  console.log(a)
// let Arr1
  arr.splice(a,1);
  localStorage.setItem("data",JSON.stringify(arr));
  let arr1=JSON.parse(localStorage.getItem("data"));
  Display(arr1); 
  e.stopImmediatePropagation();
     
}
function Editable(element,index,arr){
    
    let btn2=document.querySelector(".Edit");
    btn2.style.display="inline"; 
    let btn1=document.querySelector(".AddToList");
    btn1.style.display="none";
    let Title=document.querySelector(".title");
    let desc=document.querySelector(".desc");
    Title.value=element.Title;
    desc.value=element.Desc;
    Title.addEventListener("keyup",(e)=>{
        Title.value=e.target.value;
    })
    desc.addEventListener("keyup",(e)=>{
        desc.value=e.target.value;
    })
    btn2.addEventListener("click",(e)=>{
    
    
    let Obj={Title:Title.value,Desc:desc.value};
    arr.splice(index,1,Obj)
    localStorage.setItem("data",JSON.stringify(arr));
    let arr1=JSON.parse(localStorage.getItem("data"))
    btn1.style.display="inline"
    btn2.style.display="none";
    Display(arr1)
    Title.value="";
    desc.value="";
    e.stopImmediatePropagation();
    

 })
    // Display(arr)
}



