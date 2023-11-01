// Use map to create a new array by changing each
// course to uppercase in the course array.
// eg: [’html’,‘css’,‘js’]
// OP : [’HTML’,‘CSS’,‘JS’]
let arr=['functions','js','html','css','classes'];
// console.log("Given lower case array");
console.log(arr);
// console.log("Using map functionality final result");
let arr1=arr.map((el)=>el.toUpperCase());
console.log(arr1);
// Use map to create a new array by changing each
// number to square in the numbers array.
 let arr2=[4,5,6,8,7,8]
console.log(arr2)
let arr3=arr2.map(el=>el**2);
console.log(arr3)
// You have an array of objects with products and
// their prices. Use the map function to create a new
// array containing the products' names only
let arr4=[{
    product:"Soap",
    price:30
},{
    product:"Biscuit",
    price:12
},{
    product:"Pepsi",
    price:90
},{
    product:"Lays cream & onion",
    price:50
},{
    product:"Galaxy",
    price:40
}];
console.log("arr of objects containing products and price",arr4);
let products=arr4.map((el)=>{
    return el.product;
})
console.log(products)
// You have an array of temperatures in Celsius. Use
// the map function to convert each temperature to
// Fahrenheit using the formula (Celsius * 9/5) + 32.
let cel=[12,0,32,35,40,100];
console.log(cel)
let far=cel.map((el)=>{
    return ((el*(9/5))+32)
})
console.log(far);
// You have an array of objects representing
// students with names and ages. Use the map
// function to create a new array of objects with the
// students' names and their year of birth. Assume
// the current year is 2023.
let stud=[{
 name:"Max",
 age:60
},{
name:"Gwen",
 age:22
},{
name:"Ben",
 age:21
},
{
 name:"Kevin",
 age:23
}
]
console.log(stud);
let birthyears=stud.map((el)=>{
    let obj={};
    obj.name=el.name;
    let year=2023;
    obj.birthyear=year-el.age;
    
    return obj
});
console.log(birthyears)