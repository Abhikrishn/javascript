// if else statement

// const isLoggedIN=true
// const temperature=40

// if(temperature < 41){
// console.log(" temperature greater than 40")
// }else{
// console.log("temperature less than 40")
// }

// >, <, <=, >=, ==, === value and datatypes are also  equal
// !=, !==

// const score=200

// if(score>100){
//     const power="fly"
//     console.log(`user: ${power}`)
// }
// console.log(`user: ${power}`)// not executed because power is define in a scope and it is outside the scope which is not in the rule only var variable is defined

const balance=1000

// if(balance > 500) console.log("test"); // implict scope exceuted in a same line run without scope

// check multiple condition
// if(balance < 500){
//     console.log("less than 500")
// }else if(balance < 750){
//     console.log("less than 750")
// }else if(balance < 900){
//     console.log("less than 900")
// }else{
//     console.log("equal to 1000")
// }

// const userLoggedIn=true
// const debitcard=true

// const loggedInfromgoogle=false
// const loggedInfromemail=true

// if(userLoggedIn && debitcard & 22 == 22){ // check multiple condition at a time (logical and)
//     console.log("Allow to buy a course")
// }

// if(loggedInfromemail || loggedInfromgoogle){ //check atleat one condition is true (logical or)
// console.log("user logged in")
// }

// Nullish coalescing operator (??) work on null undefined

let val1;
// val1 = 5 ?? 10
//val1 =null ?? 10 //check safety 
//val1 = undefined ?? 15
val1 =null ?? 10 ?? 20
console.log(val1)

