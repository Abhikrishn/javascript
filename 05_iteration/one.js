// for loop
//first initialization second condition then execution

//syntax:- for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for(let i=0; i <= 10; i++){ //ctrl+d = dublicate
             const element=i;
             if(element ==5){
                 //console.log("5 is the best no")
             }
             //console.log(element)
}


for (let i = 1; i <=10; i++) {
    //console.log(`outer loop is:${i}`)
    for (let j = 1; j <=10; j++) {
       // console.log(`inner loop is: ${j} and inner loop is ${i}`)
      // console.log( i + '*' + j + ' = ' + i*j) 
    }
}

const myArray=["flash","batman","superman"]
//console.log(myArray.length)
 for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element)
    
 }

 //break and continue

 for (let index = 1; index <= 20; index++) {

    if(index == 5){
        console.log('detucted 5')
        break;
    }
   console.log(`value of i is ${index}`)
    
 }
 for (let index = 1; index <= 20; index++) {

    if(index == 5){
        console.log('detucted 5')
        continue;
    }
   console.log(`value of i is ${index}`)
    
 }
