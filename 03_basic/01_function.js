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
console.log(loggedinusermessage("kk"))