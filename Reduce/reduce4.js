// include how many of the potential voters were in the ages 18-25
//, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted.
// The resulting object containing this data should have 6 properties. See the example output at the bottom.
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
// console.log()
let voted18_25=0,numOfYoungPeople=0,voted26_35=0,numOfAdultPeople=0,voted36_55=0,numOfOldPeople=0
let a=voters.reduce((acc,el)=>{
    if(el.age>=18 && el.age<=25)
    {
        numOfYoungPeople++;
        if(el.voted==true){
            voted18_25++;
        }
    }else if (el.age>=26 && el.age<=35)
    {
        numOfAdultPeople++;
        if(el.voted==true){
            voted26_35++;
        }
    }
    else{
        numOfOldPeople++;
        if(el.voted==true){
            voted36_55++;
        }
    }
    
    acc.YoungVoters=voted18_25;
    acc.totalYoungsters=numOfYoungPeople;
    acc.AdultVoters=voted26_35;
    acc.totalAdults=numOfAdultPeople;
    acc.OldVoters=voted36_55;
    acc.totalOldVoters=voted36_55;
   
    return acc

},{})
console.log(a)