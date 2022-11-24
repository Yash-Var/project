// What is OOP?

// It is a paradigm , code karne ki style.

// Why OOP?

function BankAccount(customerName,Balance=0){
    this.customerName=customerName,
    this.Balance=Balance,
    this.accountNumber=Date.now()
    this.deposite=function(amount){
        this.Balance+=amount
    }
}

// const firstAccount=new BankAccount('yash',1000)
// firstAccount.deposite(5000)
// const secondAccount=new BankAccount('akshat')
// console.log(firstAccount,secondAccount );

const accounts=[]
const accountForm=document.querySelector('#accountForm')
const customerName=document.querySelector('#Customer_Name')
const Balance=document.querySelector('#balance')

accountForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const account=new BankAccount(customerName.value,+Balance.value);
    accounts.push(account);
    console.log(accounts);
})

const depositeForm=document.querySelector('#depositeForm')
const accountNumber=document.querySelector('#accountNumber')
const amount=document.querySelector('#amount')

depositeForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(amount.value);
    const a=accounts.find((account)=>account.accountNumber===+accountNumber.value)
  a.deposite(+amount.value)
    console.log(accounts);
})



