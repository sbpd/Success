// Global Scope

let convertFarenheitToCelsius = function (temp) {
  let result = (temp - 32) / (9/5)
  return result
}

let tempOne = convertFarenheitToCelsius(32)
let tempTwo = convertFarenheitToCelsius(68)
console.log(tempOne)
console.log(tempTwo)