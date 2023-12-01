

let container=document.querySelector('.container');
let input=document.querySelector('input[type="text"]')
async function ApiFetch(url){
    let response =await fetch(url)
    let data=await response.json();
    console.log(data)
    Display(data)
    // return data;
}
window.onload=()=>{
    ApiFetch('http://localhost:3000/films')
}
// let data1=ApiFetch()
function Display(arr){
    // container.setAttribute('display','grid')
    container.innerHTML=null;
    let arr1=arr.map((el)=>{
        let item=`<div >
        <div class='images'>
        <img src=${el.img}>
        </div>
        <h2>${el.Title}</h2>
        <p>ratings: ${el.ratings}</p>
        </div>`
        return item;
    })
    container.innerHTML=arr1.join("");

}



