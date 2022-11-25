class BankAccount {
  CustomerName;
  BankAccount;
  #Balance;

  constructor(CustomerName, Balance = 0) {
    this.CustomerName = CustomerName;
    this.BankAccount = Date.now();
    this.#Balance = Balance;
  }
  deposit(amount) {
    this.#Balance += amount;
  }

  withdraw(amount) {
    this.#Balance -= amount;
  }
}

class CurrentAccount extends BankAccount{
    transactionLimit = 50000;
    constructor(CustomerName,Balance=0){
        super(CustomerName,Balance)
    }
    takeBusinessLoan(amount) {
        console.log('Taking business loan: ' + amount);
    }
}

const rakeshAccount= new CurrentAccount('Rakesh K',2000);

// rakeshAccount.#Balance=5000;

// console.log(rakeshAccount);
 


// # fit init, fit add, fit commit 

// import os
// import cryptography
// import fileinput
// # initiale our git repo
// def init(repo):
//     # this function is to initiale a git repository
//     os.mkdir(repo)
//     os.mkdir(os.path.join(repo, '.fit'))
//     for name in ["objects", "ref"]:
//         os.mkdir(os.path.join(repo, '.fit', name))
    
//     print(f"initialized empty git repo {repo}")

// def add(repo):
//     data = read_files(os.path.join('.'))

//     return add

// def HashObjects(data, onj_type, write=True):
//     header = f"{onj_type} {len(data).encode()}"


// def commit():
//     commit_entries = []
//     for entry in read_index():
//         assert '/' not in entry.path, \
//             "Does not include in the git directory"
//         mode_path = f'{entry.mode} {entry.path.encode()} '
    
//     commit_entries = mode_path + entry.sha1

//     commit_entries.append(commit_entries)

//     return commit()

// init('fit')