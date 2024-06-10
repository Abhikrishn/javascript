// object

//singleton
//object.create

//object literals


const mySym= Symbol("key1")

const obj={
    name:"abhishek",
    [mySym]:'my key1',// if you declare symbol in a object then this method is used
    age:22,
    "destination":45,
    email:"Abhishek@google.com",
    Isloggedin:true,
    lastLoggin:["sunday","friday"]

}
// console.log(obj.name)//generally use
// console.log(obj["email"])//best way to print obj is square notation because if 
//                              //const obj={
//                                   //"name":"abhishek", then it not print the method of (obj."name")
// console.log(obj["destination"]) //console.log(obj.destination) not work and you cannot decalare (obj."destination")                                
// // console.log(typeof obj.mySym)
// console.log( obj[mySym])

obj.email="krishna@chatgpt.com"
//Object.freeze(obj)// does not change in obj object
obj.email="ak@gmail.com"
// console.log(obj)

obj.greeting=function(){
    console.log("hello obj user")
}
obj.greetingTwo=function(){
    console.log(`Hello obj user ${this.name}`)
}
console.log(obj.greeting())
console.log(obj.greetingTwo())