// Create a simple HTML page with a button. When
// the button is clicked, make an API call using the
// XML method to a public API and display the
// response in the console.
let display1=document.querySelector(".display");
let input =document.querySelector('input[type=text]');
let btn2=document.querySelector(".sub");
let button2=document.querySelector(".load")
function apiCall(url,callBack){
    let xhr=new XMLHttpRequest();
    
    xhr.onerror=function(){
      console.log("ok")
      console.log("Error");
    }
    xhr.onprogress=function(){
      console.log('load')
      display1.innerHTML=`<h2>Loading</h2>`
    }
    xhr.responseType="json";
      xhr.onload=function(){
        if(xhr.response==null){
          display1.innerHTML="<h2>Error</h2>"
        }
          callBack(xhr.response);
        
      }
    
      
   
    
      

     
      // let Newdata=data.map((el)=>{
      //   return `<h2>${el.title}</h2>
      //   <p>${el.description}</p>`
        
      // })
      // display.innerHTML=Newdata.join(" ");
      // console.log()

    
    xhr.open("GET",url);
    xhr.send();
}
function Display1(d,a){
  a.innerHTML=null;
  a.innerHTML=`<ul>${d.join("")}</ul>`

}



let button=document.querySelector(".btn");
button.addEventListener("click",()=>{
apiCall("https://dummyjson.com/products",(display)=>{
 console.log(display)
 

})
// apiCall1('http://localhost:3000/user')
})
// let input1=document.querySelector(".inp");
let button1=document.querySelector(".inpbtn");
button1.addEventListener("click",function(){
  // console.log(input1.value)
  apiCall(`https://dummyjson.com/products`,(data)=>{
  // console.log(data)
  let b=[...data.products]
  let a=b.reduce((acc,el)=>{
  let obj={};
  obj.name=el.title;
  acc.push(obj);
  return acc;
 },[])
//  console.log(a)
 let d=a.map(el=>{
   return  `<li>${el.name}</li>`
 })
 console.log(d)
 Display1(d,display1)
})
})
let btn =document.querySelector(".errhndle");
btn.addEventListener("click",function (e){
  // console.log(e)
apiCall('https://dummyjson.com/produ',data=>{
  console.log(data);

})
})
let clear=document.querySelector(".clr");
clear.addEventListener("click",(e)=>{
display1.innerHTML=null;
})
btn2.addEventListener("click",(e)=>{
  apiCall(`https://dummyjson.com/products/${input.value}`,(data)=>{
    console.log(data)
    display1.innerHTML=`<h1>${data.title}</h1>
    <h2>${data.description}</h2>
    <h3>Product Id is: ${data.id}</h3>
    <h4>Price Of Product is: ${data.price}Rs</h4>
    `
  })
})

// Loading Indicator : Add a loading indicator to your
// page to show users that the API call is in progress.
// Display the indicator while waiting for the
// response and hide it once the response is received
button2.addEventListener("click",(e)=>{
  apiCall('https://dummyjson.com/products',(data)=>{
    setTimeout(()=>{
      console.log(data)
      display1.innerHTML=null
    },2000)
  })
})