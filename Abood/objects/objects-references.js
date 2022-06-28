let myAccount = {
  name: "Abd Alrahman",
  expenses: 0,
  income: 0,
};

// let otherAccount = myAccount;
// otherAccount.income = 1000;
// console.log(otherAccount);
// otherAccount = {};

let addExpense = function (account, amount) {
  account.expenses += amount;
};

let addIncome = function (account, amount) {
  account.income += amount;
};

let resetAccount = function (account) {
  account.income = 0;
  account.expenses = 0;
};

let getAccountSummary = function (account) {
  let totalBalance = account.income - account.expenses;
  return `Account for ${account.name} has $${totalBalance}. $${account.income} in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 5000);
addExpense(myAccount, 250);
addExpense(myAccount, 100);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
