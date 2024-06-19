//  for of loop

// sytax: for (const iterator of object) {
    
// }

const arr =[1,2,3,4,5]
for (const num of arr) {
  //  console.log(num)
    
}

const greetings="Hello World"
for (const greet of greetings) {
//    if (greet === ' '){
//     console.log("decuted space")
//     continue;
//    }

if( greet !== ' '){
   // console.log(`each char is ${greet}`)
}
}

//map:The Map object holds key-value pairs and remembers the original insertion order of the keys.

const map= new Map()
map.set('Bihar',"patna")
map.set('Maharashtra',"mumbai")
map.set('West bengal',"kolkata")

//console.log(map)

for (const [key,value] of map) {
    console.log(key, ":", value)
}

const myobj={
 "IN":"INDIA",
 "USA":"UNITED STATE OF AMERICA"
}
for (const [key,value] of object) {// by this method object is not iterable only map is iterable in for of method
    console.log(key, ":", value)
}

