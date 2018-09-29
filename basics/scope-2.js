// Variable shadowing in JavaScript

//let name = 'Sumeet'

if (true) {
  // let name = 'Sean'
  
  if (true) {
    name = 'Jen'
    console.log(name)
  }
  console.log(name)
}
if (true) {

  console.log(name)
}

console.log(name)