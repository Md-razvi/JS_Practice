// Use the filter to create a new array containing
// only even numbers.
let allnumber=[1,2,3,4,5,56,6,7,78,8,9,10,100,66]
console.log(allnumber);
let even=allnumber.filter(el=>(el%2==0));
console.log(even);
// Use filter to filter out countries having less than 6
// character.
let countries=["India","Afghanistan","Australia","Pakistan","China","England","South Africa","Nepal","USA","Egypt","Ethiopia"];
console.log("Given countries "+countries)
let sixletter=countries.filter((el)=>el.length>=6);
console.log("Countries greater than six word "+sixletter);
let Eletter=countries.filter((el)=>(el[0]=="E"));
console.log("Countries starting with letter E ",Eletter);
let products=[{product:"Soap",price:10},
                {product:"Shampoo sachet",price:2},
                {product:"Vim bar(large)",price:10},
                {product:"Vim bar(mini)",price:5},
                {products:"Chikki",price:5}];
    console.log(products)

let less10=products.filter((el)=>el.price<10);
console.log(less10);
// You have an array of objects representing
// employees. Use the filter function to create a new
// array containing only employees who have a
// salary greater than or equal to $50,000.
let arr=[{name:"mujeeb",salary:30000},{name:"Nasir",salary:52000},{name:"Rajesh",salary:55000},{name:"Harry",salary:65000}];
console.log(arr)
let b=arr.filter((el)=>{
    return el.salary>=50000
})
console.log(b);

