let arr=[1,2,3,4,5,6,7,8,9];
console.log(" "+arr);
let arr1=arr.reduce((acc,el)=>{
    return acc=acc+el
},0);
console.log("sum of array is "+arr1)
let arr2=["This","is","a","function","array"]
console.log("Given a array ",arr2);
let arr3=arr2.reduce((acc,el)=>{
    return acc=acc+el+" ";
},"");
console.log("The string is",arr3);

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
console.log(arr4)
let sum=arr4.reduce((acc,el)=>{
return acc=acc+el.price;
},0)
console.log("The sum of prices",sum);
// You have an array of transactions where each
// transaction is an object with a type ("debit" or
// "credit") and an amount. Use the reduce function
// to calculate the account balance. Debits reduce
// the balance, and credits increase it
let ar5=[{ type:"debit", amount: 50 },{ type: "credit",amount: 100 }, { type: "debit", amount: 30 },{ type: "credit", amount: 100 } ];
console.log(ar5)
let trans=ar5.reduce((acc,el)=>{
    if(el.type=="credit")
    {
        acc=acc+el.amount;
    }
    else if(el.type=="debit")
    {
        acc=acc-el.amount
    }
    return acc
},0)
console.log("trotal transactions is",trans)