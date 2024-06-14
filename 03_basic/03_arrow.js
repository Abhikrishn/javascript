const user={
    username:"Abhishek",
    price:999,

welcomeMessage:function(){
console.log(`${this.username} welcome to blog` )
console.log(this) /// this refer to current context varible(current value)
}

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//console.log(this) // empty object because of node environment in browser environment(engine) it will give window object

// function chai(){
//     console.log(this) // run in the node function environment
// }

// chai()

// function chai(){
//     const username="abc"
//     console.log(this.username)
// }
// chai()

// const chai=function (){
//     const username="abc"
//     console.log(this.username)
// }
// chai()


// ()=> this is arrow function

// const addone=(num1,num2)=>{
//      return num1+num2  // it is called explicit return
// }
// console.log(addone(4,5))

//aslo


// const addone=(num1,num2)=> num1+ num2
// console.log(addone(4,5))


// const addone=(num1,num2)=>(num1+num2)
// // if you uses karli brackets{} then return is written compulsory if you use 
// // parenthesis() then return is not used
// // it is also implict return
// console.log(addone(4,5))

const addtwo=(num1, num2)=>({username:"abc"})//object is rapped into{}so
console.log(addtwo(5,9))

