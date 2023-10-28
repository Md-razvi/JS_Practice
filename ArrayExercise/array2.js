var shoppingCart = ['Milk','Coffee','Tea','Honey'];
console.log("Given Shopping cart ["+shoppingCart+"]")
shoppingCart.unshift('Meat');
console.log("Adding 'Meat' to  the array at the start ["+shoppingCart+"]")
// add Sugar at the end of you shopping cart if it
shoppingCart.push("Sugar");
console.log("Adding Sugar to the shopping cart at the end ["+shoppingCart+"]");
// remove 'Honey' if you are allergic to honey
shoppingCart.splice(4,1)
console.log("Removing honey due to allergy ["+shoppingCart+"]");
// modify Tea to 'Green Tea'
shoppingCart.splice(3,1,'Green Tea');
console.log("Modifying Tea to Green Tea ["+shoppingCart+"]");
var Countries=['India','Pakistan','SouthAfrica','NewZealand',"Argentina","Malayasia"];
console.log("Given countries array"+Countries);
console.log("Is India present in it "+Countries.includes('India'));
// Concatenate the following two arrays and store it
// in a fullStack variable.
console.log("Given two arrays below")
var arr=['HTML','CSS','JS','React'],arr2=['Node','Express','MongoDB'];
console.log(arr,arr2)
console.log("This is a mern full stack ["+arr.concat(arr2)+"]")
