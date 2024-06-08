const arr=[0,1,2,3,4,5]
// console.log(arr)

const Arr=new Array(1,4,"Abhishek",true,"shaktiman")
console.log(Arr[2])



// Array method

// Arr.push(2)//Add element in last index of an array
// Arr.pop()//Reamove element in last index of an array
// Arr.shift()//Remove element of first index of an array
// Arr.unshift(1)//Add element of first index of an array

// console.log(Arr.includes(9))
// console.log(Arr.indexOf(4))//find which index is in 4

// const newarr=arr.join()//Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(arr)
// console.log(newarr)
// console.log(typeof newarr)

// console.log(Arr)


//slice, splice

console.log("A",arr)

const myn1=arr.slice(1,3)//last range doest not incluse i.e 3range
console.log(myn1)

console.log("B",arr)

const myn2=arr.splice(1,3)//last range is include i.e 3range

console.log(myn2)
console.log("c",arr)

//splice manipulate the original array but splice not manipulate original array








