// terate through all numbers from 1 to 45. Print the following:

// For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz”

for (let i=0; i<=45; i++){
     if (i %3 ==0 && i %5 ==0){
        console.log("fizzbuzz")
    }
    else if(i %3 ==0 ){
        console.log("fizz");
    }else if(i %5 ==0){
        console.log("buzz");

    }
}

// calculate the sum of all the numbers in the following array

// var numbersArray = [1,13,22,123,49]

// let myArray=[1,13,22,123,49]

// for(let i=0; i<myArray.length; i++){
//     console.log(myArray[i])
// }

// let sum=0
// for(let i=0; i<myArray.length; i++){
//     sum = sum +myArray[i]
// }
// console.log("the sum is:",+sum)


// sweap two variable in a javascript

// let a=10;
// let b=20;
// let temp;

// console.log(`value of a before sweapping is:${a}`)
// console.log(`value of b before sweapping is:${b}`)

// temp=a;
// a=b;
// b=temp;

// console.log(`value of a after sweapping is:${a}`)
// console.log(`value of b after sweapping is:${b}`)

// sweap two variable in a javascript without using a third variable

let a=20;
let b=30;

[a,b]=[b,a]

 console.log(`value of a after sweapping is:${a}`)
 console.log(`value of b after sweapping is:${b}`)


//  Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };


const student={
    name:"Abhishek krishna",
    class:"B.tech 4th year",
    roll_no:1908226
}
console.log(student)
delete student.roll_no
console.log(student)
