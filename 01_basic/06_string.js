 const name="Abhishek"
 const repoCount=50

//  console.log(name + repoCount +"value") outdated


console.log(`hello my name is ${name} and my repocount is ${repoCount} `) //modern way 

//Another way to declared string

const gameName=new String('akkpdf-kk')
console.log(gameName)//gives key valuepair

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('f'))

const newString=gameName.substring(0,4)
console.log(newString)


const anotherString=gameName.slice(-8,5)
console.log(anotherString)


const newstringOne="    Abhishek"
console.log(newstringOne)
console.log(newstringOne.trim())// trim is used to remove unneccesary space in string

const url="https://hitesh%30aa78.com"
console.log(url.replace('%30','-'))

console.log(url.includes('abhi'))
console.log(url.includes('hit'))

console.log(gameName.split('-'))


