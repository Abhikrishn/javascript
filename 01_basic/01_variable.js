const accountId=12345
let accountEmail="ak@gmail.com"
var accountName="Abhishek"
accountcity="pune"
let account;// undefine
                //because we declared the varible but value not assign that case it can be undefine

// const accountId=12567 not acceptable because const cannot declared again
 accountEmail="high@g00gle.com"
 accountName='ankit' 
 accountcity="Bihar"

 /*
prefer not to use var
because of issue in block scope and functional scope
 */
console.log(accountEmail);
console.table([accountId,accountEmail,accountName,accountcity,account])

