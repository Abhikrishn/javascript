// for each loop

// syntax:array.forEach(element => {
    
// });

const coding=["js","ruby","cpp","python","java"]

coding.forEach( function (item){
   // console.log(item)
})

coding.forEach( (item)=>{
//console.log(item)
})

// function PrintMe(item){
//     console.log(item)
// }

// coding.forEach(PrintMe)

// coding.forEach( (item, index, arr) =>{
//     console.log(item,index,arr)
// })


// ["" , "" ,""]
// [{}, {}, {}]


const myCoding=[
    {
        languagename:"javascript",
        languagefile:"js"
    },
    {
        languagename:"java",
        languagefile:"java"
    },
    {
        languagename:"React",
        languagefile:"RS"
    }
]

myCoding.forEach( (item) =>{

    console.log(item.languagefile)
})