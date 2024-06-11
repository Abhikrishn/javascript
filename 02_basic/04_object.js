//const tingerUser =new Object()//singleton object
const tingerUser={}//non singleton object

tingerUser.name="sam"
tingerUser.id="123abc"
tingerUser.isLoggedin=false
// console.log(tingerUser)

const regularUser={
    email:"ak@gmail.com",
    fullname:{
        userfullname:{
        firstname:"Abhishek",
        lastname:"krishna"
        }
    }
}
//console.log(regularUser.fullname.userfullname)

const obj1={1:"a",2:"b"}
const obj2={3:"c", 4:"d"}

// const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1, ...obj2}
// console.log(obj3)

const user=[
    {
        id:1,
        email:"a@gmail.com"
    },
      {
        id:1,
        email:"a@gmail.com"
    },
      {
        id:1,
        email:"a@gmail.com"
    }
]

// console.log(user[1].email)
// console.log(tingerUser)
// console.log(Object.keys(tingerUser))
// console.log(Object.values(tingerUser))
// console.log(Object.entries(tingerUser))//Returns an array of key/values of the enumerable properties of an object

// console.log(tingerUser.hasOwnProperty('isLoggedin'))

const course={
    coursename:"javascript playlist",
    price:"999",
    courseInstructor:"Abhishek"
}
// course.courseInstructor

//code(object) destructure which is used in react

//const {courseInstructor}=course
const {courseInstructor:Instructor}=course
console.log(Instructor)

//////////////// API ////////////
//json format(javascript object notation)
// {
//     "name":"abhishek",
//    " age":"18",
//    "course":"javascript"
// }

[
    {},
    {},
    {}
]


   