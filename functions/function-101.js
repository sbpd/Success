// Function

let greetUser = function () {
  console.log('Welcome user!')
}

greetUser();
greetUser();
greetUser();

let square = function (num) {
  let result = num * num
  return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

let convertFarenheitToCelsius = function (temp) {
  let result = (temp - 32) / (9/5)
  return result
}

let tempOne = convertFarenheitToCelsius(32)
let tempTwo = convertFarenheitToCelsius(68)
console.log(tempOne)
console.log(tempTwo)