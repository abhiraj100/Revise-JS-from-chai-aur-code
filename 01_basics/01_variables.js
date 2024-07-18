const accountId = 144553
let accountEmail = "abhiraj@gmail.com"
var accountPassword = "12345"
accountCity = "Ranchi"
let accountState;


// const --> not changed further
// accountId = 2  // not allowed
// scope { }  in var problem of scope..... so we use "let"


accountEmail = "abhi@gmail.com"
accountPassword = "Abhiraj8055"
accountCity = "Bengaluru"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])