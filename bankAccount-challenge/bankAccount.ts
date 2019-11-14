export class bankAccount {
    owner: string;
    balance: number;
    transactions: object[];

    constructor (owner, balance, transactions?) {
        this.owner=owner;
        this.balance=balance;
        this.transactions=transactions || [];
    }

    getBalance() {
        return this.balance
    }

    withdrawal(amount: number) {
        this.balance -= amount
// this.balance now equals 95
        let transaction = {
            type: 'withdrawal',
            amount: amount,
            startingBalance: this.balance + amount,
            endingBalance: this.balance,  
        };
    
        this.transactions.push(transaction)
    }
    deposit(amount: number) {

        this.balance += amount
        
        let transaction2 = {
            type: "deposit",
            amount: amount,
            startingBalance: this.balance + amount,
            endingBalance: this.balance,
        };

        this.transactions.push(transaction2)
        
    }
}


