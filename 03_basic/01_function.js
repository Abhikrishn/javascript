function sayName(){
    console.log("A");
console.log("b");
console.log("c");
console.log("d");

}
// sayName()

//function AddTwoNumbers(number1,number2){//( parameters of a functionwriten pass in this ())
// console.log(number1 + number2)
// }
// AddTwoNumbers(3,"4")// argument pass through this finction ()

function AddTwoNumbers(number1,number2){
//   let result = number1 + number2
//   return result
  //console.log("akk")// unreachage code after result

  return number1 +number2
    }
    
const result =AddTwoNumbers(3,5)

// console.log("Result:",result)


function loggedinusermessage(username="ak"){
    // if(undefined === username){
        if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`

}
// console.log(loggedinusermessage("Abhishek"))
// console.log(loggedinusermessage("kk"))


function pricecartcalculate(val1,val2, ...num1){//(...work as rest operator sometime it is also a spread operator)
    return num1
}
//console.log(pricecartcalculate(200,400,600,700,870)) //output[600,700,870] becuase first two is val1 and val2

const user={
    username:"Abhishek",
    price:100
}
function userhandleObject(anyObject){
    console.log(`username of a object is ${anyObject.username} and the price is ${anyObject.price}`)
}
//userhandleObject(user)

//also pass pobject in this way
userhandleObject({
username:"sam",
price:300
})


const newArray=[200,400,700,"abhishek"]

function anyArray(getarray){
return getarray[3]
}
// console.log(anyArray(newArray))

// also this way
console.log(anyArray([200,800,100,700]))