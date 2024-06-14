// Immediately Invoked Function Expression (IIEE)


// IIfEs are created by wrapping a function expression in parentheses and then following it with two parentheses. 
// This tells the JavaScript engine to execute the function immediately.

// sytax ()()

// global scope ke  variable ke pollution se bacche ke liye IIFE ka used karte h isme first code ko kaha end karna hai ye batana jaruri hai jo ki ; (semicolon se karte hai)

(function chai(){
    //name IIFE
    console.log(`DB CONNECTED`)
})();

//; must be used when other function will be exucauted without semicolon ; it will not execauted 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("Abhishek")

