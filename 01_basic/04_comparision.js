// console.log(2==2);
// console.log(2>1);
// console.log(2>=2);
// console.log(2<=4);
// console.log(2!=1); //basic compariosion


// console.log("2">1);
/// console.log("02">1) //in this it allow to comapre to dtatype so it does not gives predictable result

console.log(null > 0)//false
console.log(null == 0)//false
console.log(null >= 0)//true

// the reason is that an equality check == and comparision > < >= <=  work differntly
// comaparision convert null to a number,treating it as 0.
// that's why (13) null >=0 is true and (11) null >0 is false


console.log(undefined ==0)// false

console.log(undefined >0)//false
console.log(undefined <0)//false

// === it check the value as well as datatype

console.log("2" === 2)