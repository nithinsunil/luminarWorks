class Bank {
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }

        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },

    }
    session = {}
    validateAccountNumber(acno) {
        return acno in this.accounts ? true : false
    }
    authenticate(acno, password) {
        if (this.validateAccountNumber(acno)) {
            let pwd = this.accounts[acno].password
            if (pwd == password) {
                console.log("access granted");
            }
            else {
                console.log("invalid passsword");
            }
        }
        else {
            console.log("invalid account number");
        }

    }
    getBalance(acno) {
        return this.accounts[acno].balance
    }
    balanceEnquiry() {
        if ("user" in this.session) {
            let loggedUser = this.session["user"]
            console.log(getBalance(loggedUser));
        }
        else {
            console.log("invalid user must login first");
        }
    }
    loginRequired() {
        return "user" in this.session ? true : false
    }
    fundTransfer(to_acno, amount) {
        if (this.loginRequired) {
            let loggedUser = this.session["user"]
            if (this.validateAccountNumber(to_acno)) {
                let curBal = this.getBalance(loggedUser)
                if (amount > curBal) {
                    console.log("insufficient balance");
                }
                else {
                    console.log("transaction success");
                }
            }
            else {
                console.log("invalid to account number");
            }
        }
        else {
            console.log("invalid session u must login");
        }
    }
    getDebitTransaction(){
        let user = this.loggedUser()
        this.accounts[user.transactions.debitTransactions.forEach(t => console.log(t);)]

    }
    getCreditTransaction() {
        let user = this.loggedUser()
        this.accounts[user.transactions.debitTransactions.forEach(t => console.log(t);)]
    }
    getTransactionHistory(){
        let user=this.loggedUser()
        console.log(this.accounts[user].transactions);
    }
}
var bank = new Bank()
console.log(bank.authenticate(1000, "userone"));
console.log(bank.balanceEnquiry());
console.log(bank.fundTransfer(1002, 5000));
