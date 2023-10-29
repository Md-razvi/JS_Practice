// Use for loop to iterate from 0 to 100 and print
// only even numbers.

//Declare a  string here as a 
var a=""
for(let i=0;i<=100;i++){
    if(i%2==0)
    {
        //here the string a gets updated on each even number
        //Point when string gets added with number the value becomes string 
       a=a+i+" ";
    }
}
console.log("Even number from 0 to 100")
console.log(a)


// Use for loop to iterate from 0 to 100 and print
// only odd numbers.

//Point var can be re-initialized with same name
var a=""
for(let i=0;i<=100;i++){
    //Same concept but a change of condition which i.e. not equal to
    if(i%2!=0)
    {
        //her the string a gets updated on each even number
        //Point when string gets added with number the value becomes string 
       a=a+i+" ";
    }
}
console.log("Odd numbers from 0 to 100")
console.log(a);
// Use for loop to iterate from 0 to 100 and print the
// sum of all numbers.

//Initialize a var or a let variable as zero
let sum=0,allnumbers="";
for(let i=0;i<=100;i++)
{
    //Here the sum gets updated (sum is added with i element and again stored in sum)on each loop till 100
    //try consoling sum within loop to get better idea
    //here I am using string to get my output in a single line you can directly console from 0 to 100.
    allnumbers=allnumbers+i+" "
    sum=sum+i
}
//Final product
console.log("Numbers from 0 to 100")
console.log(allnumbers)

console.log("Sum of 0 to 100 numbers",sum);

// Use for loop to iterate from 0 to 100 and print the
// sum of all evens and the sum of all odds. Print sum
// of evens and sum of odds as array

//I am taking 2 variables here and an array here
var even=0,odd=0,arr=[];
for(let i=0;i<=100;i++){
    //Using sum and even/odd concept from above  you can directly do it here
    //Here the concept is simple if it is divisible of two the even gets updated else  odd gets updated
    if(i%2==0)
    {
        even=even+i;
    }else {
        odd=odd+i
    }
}
//pushing both the values in empty array
arr.push(even)
arr.push (odd);
console.log("Sum of odd and even in an array",arr)
//

let countries=["ALBANIA","BOLIVIA","CANADA","DENMARK","ETHIOPIA","FINLAND","GERMANY","HUNGARY","IRELAND","JAPAN","KENYA"]
// Using the above countries array, create an array
// for countries length.
//Here I will be using map function as well as for loop
console.log("Given countries array "+countries)
//approach one simple map function
let countrieslength=countries.map((el)=>el.length)
console.log(countrieslength);
//approach 2 using simple for loop
//let us take an empty array first 
var arr2=[] 
for(let i=0;i<countries.length;i++)
{
  //Now we just have to take string length of each countries array push it in the empty array
  //we are accessing string using countries[i] and then taking their length using .length and pushing it in the empty array arr2 
    arr2.push(countries[i].length)
}
console.log("Using approach 2")
console.log(arr2);
// Using the above countries array, find the country
// containing the biggest number of characters.
//Take a took two variable  zero;
var max=0,largestName="";
for(let i=0;i<countries.length;i++){
    //Here I am checking if max is less than string length of countries[i] if yes it stores itself in max; 
    if(max<countries[i].length){
        max=countries[i].length;
        largestName=countries[i];
    }
}
console.log("The coutry with largest length is ",largestName)

// Using the above countries array, find the country
// containing only 5 characters.
// OP : [‘JAPAN’,‘KENYA’];

//Again here 2  approaches first is filter second is for loop
//Approach 1
var filter5lettercountries=countries.filter((el)=>{
    return (el.length==5)
})
console.log(filter5lettercountries);
//Approach 2
//take an empty array
console.log("Approach 2")
var arr3=[]
for(let i=0;i<countries.length;i++)
{
    if(countries[i].length==5)
    {
        arr3.push(countries[i])
    }

}
console.log(arr3);
//Reverse the array
//Let us take an empty array
let arr4=[]
//Here I am using reverse loop i.e. from last index to first index;
for(let i=(countries.length-1);i>=0;i--)
{
    arr4.push(countries[i]);
}
console.log("Reverse array without reverse function ["+arr4+"]")


