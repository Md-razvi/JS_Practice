function flatten(arr) {
    // your code here
    let a=arr.reduce((acc,el)=>{
      acc=acc.concat(el);  
        return acc;
    },[])
    return a;    
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 console.log(flatten(arrays));