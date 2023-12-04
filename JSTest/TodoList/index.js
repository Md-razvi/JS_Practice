let input1=document.querySelector('#name');
let input2=document.querySelector("#desc");
let submit=document.querySelector('form');
let table=document.querySelector('tbody');
let butt1=document.querySelector('.Clear');

// let obj={}
//Submit FUnction Is here
let arr=JSON.parse(localStorage.getItem('data'))||[];

submit.addEventListener('submit',function(e){
    e.preventDefault();
    // let arr1=JSON.parse(localStorage.getItem('data'))||[];   
    // if(input1.value=="" && input2.value==" ") {
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
    Display(arr)
    
})



function Delete(a){
    arr.splice(a,1);
    localStorage.setItem("data",JSON.stringify(arr))
    Display(arr)
    console.log(a)
   
}