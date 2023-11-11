let arr=["This is list 1","This is list 2","This is list 3","This is list 4","This is list 5"];
let body=document.querySelector('body');
let list=document.createElement('ul');
for(let i=0;i<arr.length;i++){
 let list_item=document.createElement('li');
 list_item.innerText=`${arr[i]}`;
 list.append(list_item);   
}
body.append(list);