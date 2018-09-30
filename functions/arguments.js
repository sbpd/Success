// Multiple arguments

let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1, 5);
console.log(result)

// Default arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
  return `Name: ${name} - Score: ${score}`
  //return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge

let getTip = function (total, tipPrecent = 0.2) {
  let percent = tipPrecent * 100
  let tip = total * tipPrecent
  return `A ${percent}% tip on $${total} would be ${tip}`
}

let storeTip = getTip(60)
console.log(storeTip)
