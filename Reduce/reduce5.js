//Convert an array into  a single string by reduce method
let arr=[1,2,3,4,5,6,7,8,9,10,11,12];
let str=arr.reduce((acc,el)=>{
     acc=acc+" "+el;
     return acc
},"")
console.log(str.trim())
//Split into an array 
let givenarray=(str.trim()).split(" ");
console.log(givenarray)
let a=givenarray.map((el)=>Number(el));
console.log(a)
let b=a.reduce((acc,el)=>{
  if(el%2==0){
    acc.push(el)
  }
  return acc;
},[])
console.log(b)
