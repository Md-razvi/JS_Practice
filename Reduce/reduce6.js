let arr=[];
for(let i=0;i<=100;i++)
{
    arr.push(i);
}
// console.log(arr)
var even=0,odd=0,b;
b=arr.reduce((acc,el)=>{
    if(acc[0]==undefined && (el%2==0))
    {
        even=even+el;
        acc.push(even);
    }else if(el%2==0)
    {
        even=even+el;
        acc[0]=even;
    }else if(acc[1]==undefined && (el%2!=0))
    {
        odd=odd+el;
        acc.push(odd);
    }else if(el%2!=0){
        odd=odd+el;
        acc[1]=odd;
    }
    return acc;
    
},[]);
console.log(b)