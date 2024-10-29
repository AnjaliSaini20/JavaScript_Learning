const accountId = 25637 // cannot change
let accountEmail = "anjali@gmail.com"
var accountPassword = "asdfg"
accountState = "Gujarat"
let accountNo ; //undefined

// accountId = 2 //not allowed
accountEmail = "anfiojfox@gmail.com"
accountPassword = "gjigji"
accountState = "bangla"
console.log(accountId);

/*
Prefer not to use "var"
bcz of issue in block scope and functional scope
*/
console.table([accountEmail , accountPassword , accountState , accountId , accountNo]);
