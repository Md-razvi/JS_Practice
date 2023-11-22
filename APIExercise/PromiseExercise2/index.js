

let butt=document.querySelector(".clickDis");
let butt2=document.querySelector('.btn2');
let table=document.querySelector('table');
butt2.addEventListener('click',(e)=>{
    apiCall(true);
})
butt.addEventListener('click',(e)=>{
    // console.log(apiCall())
    apiCall(false)
    // console.log(b)
})
function apiCall(bool){
    // let data1;
    fetch('https://restcountries.com/v2/all').then(data=>{
        
        return data.json();
    })
    .then((Objs)=>{
        data1=[...Objs]
        console.log(data1)
        if(bool){
            Display(data1)
        }
        // console.log(Objs)
      
    })
    .catch((err)=>{
        console.log(err)
    })

   
}
function Display(arr){
table.innerHTML=null;
table.innerHTML=`<thead>
<tr>
<th>Country</th>
<th>Capital</th>
<th>Currency</th>
</tr>
</thead>
<tbody >

</tbody>`
let tb=document.querySelector('tbody');
let arr1=arr.map((el)=>{

     let a=el.languages[0].name
     let item=`<td>${el.name}</td>
     <td>${el.capital}</td>
     <td>${a}</td>
     `;

     return `<tr>${item}</tr>`
})
// console.log(arr1)

 tb.innerHTML=arr1.join('');

// </tr>`

}
