//{} object 
// but actually {} scope of this program i.e used in if else, function etc.

//global scope

// var c=400
let a=300

if (true){ // all the code written in { } are block scope so let and const are not overide outside the block scope
    let a=30;
    const b=40;
    var c=50
    console.log("Inner", a)
}

//console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="Abhishek"

    function two(){
        const website="youtube"
        console.log(username)
    }
    two()
    //console.log(website) does not work because it is outside the scope
}
// one()

if(true){
    const password=12345
    if(password === 12345){
        const username="Rishu"
        console.log(username + password)
    }
    //console.log(username) outside the scope does not execute
}
//console.log(password) outside the scope does not execute


// +++++++++++++++++++++ intresting +++++++++++++++
console.log(addone(5)) //accesible when it declare before the function

function addone(num){ // it is simply function
    return num+1

}

console.log(addtwo(6))//  Cannot access 'addtwo' before initialization

const addtwo=function(num){// it is also a function but sometime it is called expression
    return num+2
}
// console.log(addtwo(6))

