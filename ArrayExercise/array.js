// Declare an empty array;
var arr=new Array();
console.log("Empty arr ["+arr+"]");
// Declare an array with more than 5 number of
// elements
var arr=new Array(1,2,3,6,4,5,7,9,8);
console.log("The given array is ["+arr+"]");
//Find the length of your array
console.log("The length of arr is "+arr.length);
//first item of array
let arr1=arr.concat();
var firstelement=arr1.shift()
console.log("The first element of arr "+firstelement)
//Last item of array
var lastelement=arr1.pop()
console.log("The last element of arr "+lastelement);
//middle element is :
var middle_element=arr.length/2
if (arr.length%2!=0){
    middle_element=Math.floor(middle_element); 
}else{
    middle_element=middle_element-1;
}
// console.log(middle_element);
console.log("The middle element is "+arr[middle_element])
// Declare an array called mixedDataTypes, put
// different data types in the array and find the
// length of the array. The array size should be
// greater than 5
var mixedDataTypes=["This",1,"is",2,"mixed",3.5,"Datatype"]
console.log("mixed array type is ["+mixedDataTypes+"]");

// Declare an array variable name itCompanies and
// assign initial values Facebook, Google, Microsoft,
// Apple, IBM, Oracle and Amazon
// Print the array using console.log(
var itCompanies=['Facebook', 'Google',' Microsoft','Apple', 'IBM', 'Oracle','Amazon'];
console.log("Given itCompanies is ["+itCompanies+"]")
console.log('Number of companies in array '+itCompanies.length)
//first item of array
var arr=itCompanies.concat();
var firstelement=arr.shift();
console.log("The first company is "+firstelement)
//last item of array
var lastelement=arr.pop();
console.log("The first company is "+lastelement)
var middle_element=itCompanies.length/2
if (itCompanies.length%2!=0){
    middle_element=Math.floor(middle_element); 
}else{
    middle_element=middle_element-1;
}
console.log("The middle element is "+itCompanies[middle_element])
// Print out each company Change each company
// name to uppercase one by one and print them out
itCompanies.forEach((el)=>{
    console.log(el.toUpperCase())
})
// Print the array like as a sentence: Facebook,
// Google, Microsoft, Apple, IBM,Oracle and Amazon
// are big IT companies. Using join() method
var a=itCompanies.join(",")
console.log(a)
var b=itCompanies.includes('Enfosys');
console.log("Does enfosys exists in itCompany "+b);