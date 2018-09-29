let temp = 55

if (temp >= 60 && temp <= 90) {
  console.log('It is pretty nice outside')
} else if (temp <= 0 || temp >= 120) {
  console.log('Do not go outside')
} else {
  console.log('Eh. Do what you want')
}

// Challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = true

 if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Offer up only vegan dishes')
 } else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Make sure to offer up some vegan options')
 } else {
   console.log('Offer up anything on the menu')
 }