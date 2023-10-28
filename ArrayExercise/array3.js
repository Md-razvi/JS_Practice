// The following is an array of 10 students ages:
 var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
 var arr=ages.concat();
 console.log("Given ages of 10 student ["+ages+"]");
 console.log("Sorted ages  ["+arr.sort()+"]");
 var start=arr.shift();
 var end=arr.pop();
 console.log("Min age is "+start);
 console.log("Max age is "+end);
 let sum=ages.reduce((acc,currentValue)=>{
     return acc=acc+currentValue;
 },0)
 if (ages.length%2==0){
    console.log("The medians are "+ages[(ages.length/2)-1]+","+ages[ages.length/2]);
 }else{
    let a=Math.floor(ages.length/2);
    console.log("The median is "+ages[a])
 }
 let c=sum/ages.length
 console.log('Average age of all ages '+(sum/ages.length))
 console.log("Range of ages is "+(end-start))
 console.log("Comparing values of min-avg "+Math.round(Math.abs(start-c)))
 
 console.log('Comparing values of max-avg '+Math.round(end-c))
let arr1=["Apple","Banana","Kivy","Pin","Pot","pet","cat"];
console.log("Given an array of words ",arr1)
console.log("After the game ",arr3(arr1))
function arr3(arr2){
    let arr1=[];
    for(let i=0;i<arr2.length;i++)
    {
        if (arr2[i].length==3){
            arr1.push(arr2[i]);
        }
    }
    return arr1
}
let ShoppinCart=["Namak","Pudina","Hari Mirchi","Andey","Palak","Achhaar"];
console.log("Given Shopping list ",ShoppinCart)
console.log('Removing an item Pudina ')
function Remove(arr,name)
{
    let arr1=[]
   for(let i=0;i<arr.length;i++)
   {
     if(arr[i]==name)
     {
       continue;
     }
     arr1.push(arr[i]);
   }
   return arr1
}
console.log(Remove(ShoppinCart,"Pudina"))