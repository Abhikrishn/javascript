//primitive Datatype

//7 types: string, nuber, boolean, null, undefined, bigInt,symbol

const score=100 // javascript ke andar hum kisi language ko define nhi karte h so it dynamically typed
// if it is in typescript then const sscore:number=100

const  str1="Abhishek"
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

const bigNumber =5528868763808n

const id=Symbol('123')
const anotherId= Symbol('123')
console.log(id === anotherId)



//Reference (Non primitive)

//Array, Objects, Functions

const heros=["shaktiman" ,"nagraj","chotabheem"];

let myobj={
    name:"Abhishek",
    age:18
}

let myfunction=function(){
    console.log("Hello WORLD")
}

console.log(typeof myfunction)




// https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++++++++++++++

//stack memory used  (primitive), Heap memory used (non-primitive)
 
let myYoutubename="Abhishekkrishna.com"

let anotherName=myYoutubename
anotherName="Abhishekaur code"

console.log(myYoutubename);
console.log(anotherName);


let userOne={
    email:"abhishek@google.com",
    upi:"an@ybl"
}
let userTwo=userOne
userTwo.email="krishna@gmail.com" //reference leta hai ek jagah

console.log(userOne.email)
console.log(userTwo.email)