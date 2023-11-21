// Write a function that makes an API call to a
// endpoint and logs the response using
// XMLHTTPRequest. Use a callback function to
// handle the response.
function apiCall(url,callBack){
 let xhr=new XMLHttpRequest();
 xhr.responseType="json"
 xhr.onerror=function(){
    console.log("err")
 }
 xhr.onload=function(){
    callBack(xhr.response)
 }
 xhr.open('GET',url);
 xhr.send();
}
apiCall('https://dummyjson.com/products',(data1)=>{
    // console.log(data)
    // console.log(data1)
    console.log(data1.products[0])
    apiCall(`https://dummyjson.com/produc${data1.products[0].ids}`,(data)=>{
        if(data!=null){
        console.log(data)
        }else{
            console.log("error")
        }
    })
 })