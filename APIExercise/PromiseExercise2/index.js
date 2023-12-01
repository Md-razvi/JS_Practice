let butt=document.querySelector(".clickDis");
let butt2=document.querySelector('.btn2');
let table=document.querySelector('table');
let butt3=document.querySelector('.btn');

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
<th class='heads'>Country</th>
<th class='heads'>Capital</th>
<th class='heads'>Population</th>
</tr>
</thead>
<tbody>

</tbody>`
let tb=document.querySelector('tbody');
let arr1=arr.map((el)=>{

     let a=el.languages[0].name
     let item=`<td class="data2">${el.name}</td>
     <td class="data2">${el.capital}</td>
     <td class="data2">${el.population}</td>
     `;

     return `<tr>${item}</tr>`
})
// console.log(arr1)

 tb.innerHTML=arr1.join('');

// </tr>`

}

function SortFunction(arr,n){
    
 for(let i=0;i<n-1;i++){
    // let isSwaptrue=false;
    for(let j=0;j<n-i-1;j++)
    {
        if(arr[j]?.area<arr[j+1]?.area)
        {
            swap(arr,i,j);
            // isSwaptrue=true;
        }


    }
    // if(isSwaptrue==false)
    // {
    //     break
    // }
 }   
}

function swap(arr,i,j){
    let temp;
    temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
function Display2(arr){
    table.innerHTML=`<thead>
    <tr>
    <th class="heads" >Index No</th>
    <th class="heads" >Country</th>
    <th class="heads" >Population</th>
    </tr>
    </thead>
    <tbody >
    
    </tbody>`
    let tb=document.querySelector('tbody');
    let arr1=[];
    for(let i=0;i<10;i++)
    {
        let item=`
        <td class="data2">${i+1}.</td>
        <td class="data2">${arr[i].name}</td>
        <td class="data2">${arr[i].population}</td>
        `;
        arr1.push(`<tr>${item}</tr>`)   
    }
    // let arr1=arr.map((el)=>
    // {
     
    //  return `<tr>${item}</tr>`
    // })

     tb.innerHTML=arr1.join('');
}
butt3.addEventListener('click',function(e){
   fetch('https://restcountries.com/v2/all').then(data=>{
    console.log(data)
    return data.json()
   }).then((Data)=>{
    // console.log(Data)
    SortFunction(Data,Data.length)
    console.log(Data)
    Display2(Data)
   })
})
// Create another Button to read the
// countries api and count total number of
// languages in the world used as officials and
// display them.
let butt4=document.querySelector('.btn1');
butt4.addEventListener('click',function(e){
    fetch('https://restcountries.com/v2/all').then(data=>{
        // console.log(data)
        return data.json()
    }).then((data1)=>{
        
        // console.log(data1);
        Display4(data1)
    })
})

function Display4(arr){
 table.innerHTML=null;
 table.innerHTML=`<thead>
    <th class='heads'>Country</th>
    <th class="heads">No. Of Languages</th>
    <th class="heads">Languages</th>
    </thead>
    <tbody>
    </tbody>
    `
 let tb=document.querySelector('tbody');
 let arr1=arr.map((el)=>{
    let arr2=el.languages.reduce((acc,item)=>{
        acc.push(item.name);
        return acc
    },[])
    let item=`<td class='data2'>${el.name}</td>
    <td class='data2'>${arr2.length}</td>
    <td class='data2'>${arr2}</td>
    `
    
    return `<tr>${item}</tr>`
 })

 tb.innerHTML=arr1.join("");
 
}
