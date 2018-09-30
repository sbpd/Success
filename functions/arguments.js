// Multiple arguments

let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1, 5);
console.log(result)

// Default arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
  return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge

let getTip = function (total, tipPrecent = 0.2) {
  return total * tipPrecent
}

let storeTip = getTip(56, 0.25)
console.log(storeTip)