let isAccountLocked = false
let userRole = 'user'


if(isAccountLocked) {
  console.log('Is account locked')
} else if (userRole === 'admin') {
  console.log('Welcome Admin!')
} else {
  console.log('Welcome!')
}

// Challenge

let temp = 101
 if (temp <= 32) {
   console.log('It\'s Freezing Outside')
 } else if (temp >= 100) {
   console.log('It\'s way too hotside!')
 } else {
   console.log('Go for it. It is preety nice')
 }