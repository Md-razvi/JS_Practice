let submit=document.querySelector('form');
let table=document.querySelector('main>div:nth-child(2)');
let butt1=document.querySelector('.Clear');

// let obj={}
//Submit FUnction Is here

submit.addEventListener('submit',function(e){
    e.preventDefault();
    // let arr1=JSON.parse(localStorage.getItem('data'))||[];   
    // if(input1.value=="" && input2.value==" ") {
let arr=JSON.parse(localStorage.getItem('data'))||[];
        
    let input1=document.querySelector('#name');
        let input2=document.querySelector("#desc");
        
    let obj={
        name:input1.value,
        Desc:input2.value
    }
// }
    arr.push(obj)
    localStorage.setItem('data',JSON.stringify(arr))
    
    Display(arr)
    

})
window.onload=function(){
Display(arr)
}

function Display(arr){
    
    table.innerHTML=null
    
    // let a=document.querySelector('tbody')
    let data=arr.map((el,index)=>{
        let item=`<tr>
        <td>${el.name}</td>
        <td>${el.Desc}</td>
        <td>
        <button class='delete' onclick=Delete(${index})>
                Delete
        </button>
        <button class='delete' onclick=Edit(${index})>
                Edit
        </button>
        </td>
        </tr>`
        return item
    })
    table.innerHTML=data.join("");
    // let but=document.querySelector('.delete')
    // but.addEventListener("click",()=>{
        
    // })

}

butt1.addEventListener('click',function(e){
    localStorage.clear(); 
    // let obj={}  
    let arr2=[]
    localStorage.setItem('data',JSON.stringify(arr2))
    // table.innerHTML=null;
    Display(arr2)
    let input1=document.querySelector('#name');
    let input2=document.querySelector("#desc");
    input1.value="";
    input2.value="";
    
})



function Delete(a){
let arr=JSON.parse(localStorage.getItem('data'))||[];

    arr.splice(a,1);
    localStorage.setItem("data",JSON.stringify(arr))
    Display(arr)
    console.log(a)
   
}
function Edit(a){

    let arr=JSON.parse(localStorage.getItem('data'))||[];
    let input1=document.querySelector('#name');
    let input2=document.querySelector("#desc");
    input1.value=arr[a].name;
    input2.value=arr[a].Desc;
    let obj1={
        name:input1.value,
        Desc:input2.value
    }
    arr.splice(a,1,obj1)
    Display(arr)
    localStorage.setItem("data",JSON.stringify(arr));
    




}