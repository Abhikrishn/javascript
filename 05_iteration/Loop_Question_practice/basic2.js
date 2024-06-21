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

let myArray=[1,13,22,123,49]

for(let i=0; i<myArray.length; i++){
    console.log(myArray[i])
}

let sum=0
for(let i=0; i<myArray.length; i++){
    sum = sum +myArray[i]
}
console.log("the sum is:",+sum)