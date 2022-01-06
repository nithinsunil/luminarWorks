var users = {
    1000: {
        accno: 1000, personName: "ram", balance: 5000, password: "userone", transactions: {
            creditTransactions: [],
            debitTransactions: []
        }
    },
    1001: {
        accno: 1001, personName: "ravi", balance: 7000, password: "usertwo", transactions: {
            creditTransactions: [],
            debitTransactions: []
        }
    },
    1002: {
        accno: 1002, personName: "raju", balance: 8000, password: "userthree", transactions: {
            creditTransactions: [],
            debitTransactions: []
        }
    },
    1003: {
        accno: 1003, personName: "vivek", balance: 15000, password: "userfour", transactions: {
            creditTransactions: [],
            debitTransactions: []
        }
    },
}

// fundtransfer with updated balance

function validateAccountNumber(accno) {
    return accno in users ? true : false
}

function balanceEnquiry(accno) {
    if (validateAccountNumber(accno)) {
        return users[accno].balance
    }
    else {
        console.log("invalid account number");
    }
}


function fundTransfer(from_accno, to_accno, amount) {
    if (validateAccountNumber(from_accno) && validateAccountNumber(to_accno)) {
        let currBal = users[from_accno].balance
        if (amount > currBal) {
            console.log("insufficient balance");
        }
        else {
            users[from_accno].balance -= amount
            let from_acc_newbal = balanceEnquiry(from_accno)
            users[to_accno].balance += amount
            let to_acc_newbal = balanceEnquiry(to_accno)
            console.log(`account number ${from_accno} has been debited with ${amount} available balance is ${from_acc_newbal}`);
            console.log(`account number ${to_accno} has been credited with ${amount} available balance is ${to_acc_newbal}`);
            let crTrans = { from: from_accno, amount: amount }
            let dbTrans = { from: to_accno, amount: amount }
            users[to_accno].transactions.creditTransactions.push(crTrans)
            users[from_accno].transactions.debitTransactions.push(dbTrans)

        }
    }
    else {
        console.log("invalid account number");
    }
}

// console.log(users);
return fundTransfer(1000, 1001, 4000)

// balance enquiry

// function validateAccountNumber(accno){
//     return accno in users?true:false
// }

// function balanceEnquiry(accno){
//     if(validateAccountNumber(accno)){
//         console.log(users[accno].balance);
//     }
//     else{
//         console.log("invalid account number");
//     }
// }

// return balanceEnquiry(1002)

// function validateAccountNumber(accno){
//     return accno in users?true:false
// }

// function fundTransfer(from_acc, to_acc, amount){
//     if(validateAccountNumber(from_acc) && validateAccountNumber(to_acc)){
//         return amount <= users[from_acc].balance?"success":"fail"
//     }
//     else{
//         console.log("invalid account numbers");
//     }
// }
// console.log(fundTransfer(1000, 1002, 3000));

// authenticate function with accno and password

// function authenticate(accno, pass){
//     if(accno in users){     // check whether accno is valid
//         let pwd = users[accno].password     // assigning original password to a variable
//         if(pass == pwd){    // checking if given pass = original pass
//             return 1
//         }
//         else{
//             return -1
//         }

//     }
//     else{
//         return 0;
//     }
// }

// console.log(authenticate(1000, "userone"));


// 1003 name

// console.log(users[1003].personName);

// 1005 exist or not

// console.log("1005" in users);