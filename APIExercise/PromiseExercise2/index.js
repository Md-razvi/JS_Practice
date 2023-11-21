let butt=document.querySelector(".clickDis");
butt.addEventListener('click',(e)=>{
    fetch('https://restcountries.com/v2/all').then(data=>{
        // console.log(data)
        return data.json();
    })
    .then((Objs)=>{
     console.log(Objs)
    })
    .catch((err)=>{
        console.log(err)
    })
})