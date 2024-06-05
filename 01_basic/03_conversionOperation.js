let score="Abhishek"

console.log(typeof score)
console.log(typeof(score))


let valueInNumber=Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

//"33" =>33
//"33abc" =>NaN
//TRUE =1 ;FALSE=0

let isLoggedIn="Abhishek"

let ValueInBoolean=Boolean(isLoggedIn)
console.log(typeof ValueInBoolean)
console.log(ValueInBoolean)

//1 =>true ; 0=>False
// "" =>false
//"Abhishek"=>true

let someNumber=33

let valueInString=String(someNumber)
console.log(valueInString)
console.log(typeof valueInString)


// ***************************** Operations ***********************

let value=3
let negValue=-value
console.log(negValue)


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(4/2);
// console.log(2%3);


let str1="hello";
let str2="Abhishek";

let str3=str1+str2;
console.log(str3)


console.log("1" +2);
console.log(1+"2");
console.log("1" +2 +2)
console.log(2+2 +"1")// if sting first then all consider as a string but string is last then as it is so 
                     // this way is not generally used by the devloper for readability 

 console.log((3+4)*3 %2)  
 
 console.log(+true)
//  console.log(true+)
console.log(+"")//empty parenthesis consider 0

let gameCount=100
// gameCount++;
--gameCount
console.log(gameCount)

//link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion