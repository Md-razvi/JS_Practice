
function checkPermission(userRole,action)
{
    let obj={
         ok:function(a="permission granted"){
            console.log(a);
         },
         deny:function(b="permission denied"){
            console.log(b);
         }
    }
    switch (userRole)
    {

        case "user":
            switch(action)
            {
              case "read":
                obj.ok();
                break;
              case "update":
                obj.ok();
                break;
              case "create":
                    // console.log("permission granted");
                    obj.ok();
                break;
                default:
                    obj.deny()
                    // console.log("permission denied");
            } 

         break;
         case "guest":
            switch(action){
                case "read":
                obj.ok();
                break;
                default:
                obj.deny();
            }
            break;
        case 'admin':
            switch(action)
            {
              case "read":
                obj.ok();
                break;
              case "update":
                obj.ok();
                break;
              case "create":
                    // console.log("permission granted");
                    obj.ok();
                break;
              case "delete":
                    // console.log("permission granted");
                    obj.ok();
                default:
                    obj.deny("This action is not defined")
                    // console.log("permission denied");
            }
            break;
            default:
                obj.deny("Please give appropriate role according to user")


    }
}
console.log("Check permission for user for creating");
checkPermission("user","create");
console.log("Check permission for user for deleting");
checkPermission("user","delete");
console.log("Check permission for guest for deleting");
checkPermission("guest","delete");
console.log("Check permission for guest for reading");
checkPermission("guest","read");

function DiscountCalc(a)
{
    let b;
    if(a>50)
    {
        b=a*(10/100);
        return ` Final price is :$${a-b}`;
    }else{
        return `Final price is :$${a}`;
    }
}
console.log(DiscountCalc(50))
console.log(DiscountCalc(60))
// console.log(DiscountCalc(70))