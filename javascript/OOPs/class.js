class BankAccount{
    customerName;
    bankAccount;
    Balance;

    constructor(customerName,balance=0){
        this.customerName=customerName;
        this.bankAccount=Date.now();
        this.Balance=balance;
    }

    deposite(amount){
        this.Balance+=amount;
    }
    withdraw(amount){
        this.Balance-=amount;
    }
}

const yash=new BankAccount("yash",1000);
console.log(yash);
yash.deposite(2000);
console.log(yash);

