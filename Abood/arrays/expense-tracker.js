const account = {
    name: "Abd Alrahman",
    expenses: [],
    income: [],
    addExpense(description,amount){
        this.expenses.push({
            description,
            amount
        })
    },
    totalExpenses: function(){
        let total = 0;
        this.expenses.forEach(function(item){
            total += item.amount;
        })
        return total;
    },
    addIncome(description,amount){
        this.income.push({
            description,
            amount
        })
    },
    totalIncome(){
        let total = 0;
        this.income.forEach(function(item){
            total += item.amount;
        })
        return total;
    },
    balance(){
        return this.totalIncome() - this.totalExpenses();
    },
    getAmountSummary(){
        return `${this.name} has a balance of $${this.balance()}. $${this.totalIncome()} in income. $${this.totalExpenses()} in expenses.`
    }
}


account.addExpense('Rent',950);
account.addExpense('Coffee',2);
account.addIncome('Job',1000);
console.log(account.getAmountSummary());

