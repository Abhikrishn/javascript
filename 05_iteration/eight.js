// reduce in js

const mynum=[1,2,3]

// const total=mynum.reduce(function (acc,curval){
//     console.log(`acc:${acc} and curval:${curval}`)
//     return acc+curval
// },0)

const total= mynum.reduce( (acc,curval) => (acc+curval),0)// pahle acc means accumulator and carval means current value so usko currentvalue dena pareta h to 0 is the current value
console.log(total)

const courses=[
    {
        coursename:"java with dsa",
        price:2999
    },
    {
        coursename:"javascript",
        price:1999
    },
    {
        coursename:"cpp with dsa",
        price:2999
    },
    {
        coursename:"python",
        price:2599
    },
]
const toPay=courses.reduce( (acc,item) => acc+item.price ,0)
console.log(toPay)