const userEmail="abc@gmail.com"
// here we dont give the value then code is also execute it assuse the string value is true
// if i give empty string " " then it assuse the false 
// this is called truthy value

if(userEmail){
    console.log("got user email")
}else{
    console.log("Don't have user email")
}

//falsy value

//false, 0, -0, BigInt 0n, "", null, undefined, NaN
//except this all are truthy value

//truthy values 
// surprising
//"0", "false"," ",[],{},function(){}

// check empty array[]

// const user=[]
// if(user.length === 0){
// console.log("Array is empty")
// }
 
// check empty object {}

// const emptyobj = {}
// if(Object.keys(emptyobj).length === 0){
//     console.log("object is empty")
// }


// note: false == 0 gives true
//       false == '' gives true
//       0 =='' gives true

