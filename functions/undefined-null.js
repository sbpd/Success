// Undefined for a variable

let name

name = 'Jen'
if (name === undefined) {
  console.log('Please provide a name')
} else {
  console.log(name)
}

// Undefined for function arguments

let square = function(num) {
  console.log(num)
}

// Undefined as function return default value
let result = square()
console.log(result)

// 
let age = 26
age = null 
console.log(age)