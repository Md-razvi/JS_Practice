// If a is greater than b return 'a is greater than b'
// else 'a is less than b'. Try to implement it in two
// ways using if else ,ternary operator.
var a=34,b=80;
console.log(a,b)
console.log("Simple if else operation result")
if(a>b){
   console.log("A is greater");
}else {
    console.log("B is greater");
}
console.log("Ternary Operator")
let c=(a>b)?"A is greater":"B is greator";
console.log(c);
function EveOdd(){
a=prompt("Enter the value");
if(a%2==0){
   alert(`${a} is an even number`)
}else {
    alert(`${a} is an odd number`)

}
}
// Get user input using prompt(“Enter your age:”). If
// user is 18 or older , give feedback: 'You are old
// enough to drive' but if not 18 give another
// feedback stating to wait for the ‘number’ of years
// he needs to turn 18.
// Find the largest of three numbers.
// Check if the day is working day or weekend day.
// Using switch case
// Enter a number: 2
// 2 is an even number
// Enter a number: 9
// 9 is is an odd number
// Enter your age: 30
// You are old enough to drive.
// Enter your age:15
// You are left with 3 years to drive.
function Agebar()
{
    var b=prompt("Enter your age:")
    if(b>=18){
        alert('You are old enough to drive')
    }
    else {
        alert(`He needs to wait for ${18-b} years to turn 18`)   
    }
}
function Largest(a,b,c)
{
    if(a>b){
        if(a>c)
        {
            console.log(`${a} is the greatest of all`)
        }else {
            console.log(`${c} is the greatest of all`)

        }
    }else
    {
        if(b>c)
        {
            console.log(`${b} is the greatest of all`)
        }else {
            console.log(`${c} is the greatest of all`)

        }


    }
}
Largest(8,6,2)
function WorkWeek(){
    let a=prompt("Enter a day")
    switch(a){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
           alert("Working day");
           break;
        case "Saturday":
        case "Sunday":
            alert("Weekend Hurray");
            break;
        default :
          alert ("Please enter a default value")
    }
}
// You are creating a role-based access control
// system. Write a function that checks if a user has
// permission to perform a certain action. Users can
// have roles of "admin,
// " "user,
// " or "guest." The
// actions include "create,
// " "read,
// " "update,
// " and
// "delete." Define the permissions in an object and
// use conditional statements to check if a user can
// perform the requested action.
// Input : checkPermission(userRole, action)
// Output: "Permission granted.
// WorkWeek()