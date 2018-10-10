let myAccount= {
  name: "Sumeet Bajaj",
  expenses: 0, 
  income: 0
}

let addIncome = function(account, income) {
  account.income = account.income + income
}

let addExpense = function(account, expense) {
  account.expenses = account.expenses + expense
}

let resetAccount = function (account) {
  account.expenses = 0
  account.income = 0
}
let getAccountSummary = function(account) {
  let balance = account.income - account.expenses
  return `Account for ${account.name} has $${balance}. $${account.income} in income and $${account.expenses} in expenses`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.5)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))

resetAccount(myAccount)
console.log(getAccountSummary(myAccount))