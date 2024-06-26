// const courses=["java","python","ruby","javascript","cpp"]

// const values = courses.forEach( (items) =>{
//     // console.log(items)
//     return items
// })
// console.log(values)

// filter in js

const myNums=[1,2,3,4,5,6,7,8,9,10]

//  const newNum=myNums.filter( (num) =>{
//    return num > 4
    
//  })


// const newNum =[]

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNum.push(num)
//     }
// })

//  console.log(newNum)


const books=[

    {
        bookname:"bookone",genre:"fiction",published:1980,
        edition:1988
    },
    {
        bookname:"booktwo",genre:"non-fiction",published:1990,
        edition:1999
    },
    {
        bookname:"bookthree",genre:"history",published:2000,
        edition:2005
    },
    {
        bookname:"bookfour",genre:"fiction",published:2001,
        edition:2007
    },
    {
        bookname:"bookfive",genre:"science",published:2005,
        edition:2010
    },
    {
        bookname:"booksix",genre:"non-fiction",published:2010,
        edition:2020
    },
    {
        bookname:"bookseven",genre:"history",published:2001,
        edition:2017
    },
    {
        bookname:"bookeight",genre:"science",published:2019,
        edition:2024
    },
]

let userbooks =books.filter( (bk) =>bk.genre ==="history")

userbooks=books.filter ( (bk) => {
    return bk.published >=2000 && bk.genre ==="fiction"
})
console.log(userbooks)



