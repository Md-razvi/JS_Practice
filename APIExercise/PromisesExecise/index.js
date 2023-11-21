let button =document.querySelector(".btn1")

button.addEventListener('click',function(e){
    APIPromise('https://dummyjson.com/crts/1').then((data)=>{
        console.log(data);

    }).catch(err=>{
        console.log(err)
    })
})

function APIPromise(url){
let xhr=new XMLHttpRequest();
xhr.responseType='json';
let promise=new Promise((res,rej)=>{
    xhr.onload=function(){
        if(xhr.response!=null)
        {
         res(xhr.response)
        }else
        {
            rej("Error")
        }
    }

})
xhr.open('GET',url);
xhr.send();
return promise;
}
// Now make sequential API calls. Use the
// response of the first promise and return the
// total amount to the next.

APIPromise('https://dummyjson.com/carts/1').then((data)=>{
    console.log(data)
    return data.total
}).then(fata=>{console.log(fata)}).catch(err=>{
    console.log(err)
})
// Now print the sum of the amount of carts.
let totalAmt=0;
APIPromise('https://dummyjson.com/carts/1').then((data)=>{
    // console.log(data)
    totalAmt=totalAmt+data.total
    return APIPromise('https://dummyjson.com/carts/2')
}).then(fata=>{
    // console.log(fata)
totalAmt=totalAmt+fata.total;
return totalAmt;
}).then((data)=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})