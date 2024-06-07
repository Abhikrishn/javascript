const score=400
// console.log(score)

const balance=new Number(200)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(1))


const anotherNumber=23.487
// console.log(anotherNumber.toPrecision(3))

const hundreds=100000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'))


// ============ Maths ======================

// console.log(Math)
// console.log(Math.abs(-4))//show positive no
// console.log(Math.abs(4))
// console.log(Math.round(4.7))
// console.log(Math.ceil(4.3))//upper value
// console.log(Math.floor(4.9))//lower value

// console.log(Math.min(4,5,2,9))//find minimum value
// console.log(Math.max(2,9,8,4))//find maximum value


console.log(Math.random())//value always lies between 0 to 1

console.log((Math.random()*10) +1)
console.log(Math.floor(Math.random()*10) +1)

const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min +1)) + min)