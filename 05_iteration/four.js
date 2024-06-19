// for in loop

// syntax: for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// syntax: for (const key in object) {
   
// }

const myobj={
    js:"javascript",
    py:"python",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myobj) {// object is iterable by for in method not for of
  //console.log(`${key} short is for ${myobj[key]}`)
}

const programming=["js","cpp","ruby","py"]

for (const key in programming) {
  // console.log(key)// array key hold number 
   //console.log(programming[key])
}

const map= new Map()
map.set('Bihar',"patna")
map.set('Maharashtra',"mumbai")
map.set('West bengal',"kolkata")

for (const key in map) {// map is not iterable through for in method it terable through for of method
 // console.log(key)
}