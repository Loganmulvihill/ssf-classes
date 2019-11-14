"use strict";
exports.__esModule = true;
var bankAccount = /** @class */ (function () {
    function bankAccount(owner, balance, transactions) {
        this.owner = owner;
        this.balance = balance;
        this.transactions = transactions || [];
    }
    bankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    bankAccount.prototype.withdrawal = function (amount) {
        this.balance -= amount;
        // this.balance now equals 95
        var transaction = {
            type: 'withdrawal',
            amount: amount,
            startingBalance: this.balance + amount,
            endingBalance: this.balance
        };
        this.transactions.push(transaction);
    };
    bankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        var transaction2 = {
            type: "deposit",
            amount: amount,
            startingBalance: this.balance + amount,
            endingBalance: this.balance
        };
        this.transactions.push(transaction2);
    };
    return bankAccount;
}());
exports.bankAccount = bankAccount;
