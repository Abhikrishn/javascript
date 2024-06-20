//Write a for loop that prints the numbers from 1 to 10 to the console

for(let i=0; i <= 10; i++){
    //console.log(i)
}

//Write a for loop that prints only the even numbers from 1 to 10 to the console.
for(let i=0; i <= 10; i++){
   if(i % 2 === 0){
   // console.log(i)
   }
}

//Write a for loop that prints only the odd numbers from 1 to 10 to the console.

for(i=0; i <=10; i++){
    if(i %2 !== 0){
        //console.log(i)
    }
}

//Write a for loop that prints the squares of the numbers from 1 to 10 to the console.
for(i=0; i<=10; i++){
    let square= i*i
    //console.log(square)
}

// Write a for loop that prints the sum of the numbers from 1 to 10 to the console.
let totalsum=0;
for(let i=1; i<=10; i++){

   totalsum += i
}
//console.log(`the total sum of 1 to 10=${totalsum}`)

//Write a for loop that prints the factorial of 10 to the console.
 let factorial=1;

 for(let i=1; i<=10; i++){
    factorial *=i
 }
 //console.log(`the factorial of 1 to 10 = ${factorial}`)

//Write a for loop that prints the Fibonacci sequence up to 100 to the console.

// The Fibonacci series is a series where the next term is the sum of the previous two terms. The first two terms of the Fibonacci sequence are 0 followed by 1.

// Fibonacci Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// let num1=0;
// let num2=1;
// console.log(num1)
// console.log(num2)

// for(let i=0; i<=14; i++){
//     let totalnum=num1+num2 // 0 + 1 =1
//     console.log(totalnum);

//     num1=num2; // 0 =>1
//     num2=totalnum// 1 => 1
// }

//also,

// Initialize variables for the first two Fibonacci numbers
let a = 0;
let b = 1;

// Print the first Fibonacci number (0) separately
//console.log(a);

// Print the second Fibonacci number (1) separately
//console.log(b);

// Loop to calculate and print subsequent Fibonacci numbers up to 100
for (let next = a + b; next <= 100; next = a + b) {
    //console.log(next);
    a = b; // Update variables for the next iteration
    b = next;
}


// Write a for loop that prints the following pattern to the console:
// Code

// *
// **
// ***
// ****
// *****

// const rows=5;

// for(let i =0; i <=rows; i++){
//     let pattern= '';

//     for( let j=0; j<=i; j++){
//         pattern += '*'
//     }
//     console.log(pattern)
// }

// Write a for loop that prints the following pattern to the console:
// Code

// 1
// 12
// 123
// 1234
// 12345

// const row=5

// for(let i=1; i<=row; i++){
//     let pattern =''
//     for( let j=1; j<=i; j++){
//         pattern += j
//     }
//     console.log(pattern)
// }

// Write a for loop that prints the following pattern to the console:
// Code

//      *
//     ***
//    *****
//   *******
//  *********

const row=5;

for(let i=1; i<=row; i++){
    let pattern =''

    for(let j=1; j<=row - i; j++){
        pattern += ' '
    }

    for(let k=1; k<= 2 *i -1; k++){
        pattern += "*"
    }
    console.log(pattern)
}