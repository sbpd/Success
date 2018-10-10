let name = "   Sumeet Bajaj  "

console.log((name.length))
console.log((name.toUpperCase()))
console.log((name.toLowerCase()))

let password = "abc123passwsdord098"

console.log(password.includes('password'))

console.log(name.trim())

let isValid = function (password) {
//   if(password.length > 8 && !password.includes('password')){
//   return true
// } else {
//   return false
// }
return password.length > 8 && !password.includes('password')
}

console.log(isValid('adsdf'))
console.log(isValid('abc23566!&*%'))
console.log(isValid('jknjaspassword'))