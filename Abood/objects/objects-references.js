let myAccount = {
  name: "Abd Alrahman",
  expenses: 0,
  income: 0,
};

let otherAccount = myAccount;
otherAccount.income = 1000;
console.log(otherAccount);
otherAccount = {};

let addExpense = function (account, amount) {
  account.expenses += amount;
};

addExpense(myAccount, 2.5);
console.log(myAccount);
console.log(otherAccount);
