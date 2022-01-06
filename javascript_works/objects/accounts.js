var accounts = [
    {
        acno: 1000, ac_type: "savings", balance: 5000, transactions: [
            { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
            { to: 1002, amount: 600, note: "geto", method: "neft" },
            { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
        ]
    },
    {
        acno: 1001, ac_type: "savings", balance: 6000, transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
            { to: 1002, amount: 500, note: "geto", method: "neft" },
            { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }

        ]
    },
    {
        acno: 1002, ac_type: "current", balance: 8000, transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
            { to: 1001, amount: 5000, note: "geto", method: "neft" },
            { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }

        ]
    },
    {
        acno: 1003, ac_type: "current", balance: 16000, transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
            { to: 1002, amount: 500, note: "geto", method: "neft" },
            { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }

        ]
    },

]

// q1. print tot num of acc

// console.log(accounts.length);

// q2. print all account numbers whose acc type is savings

// accounts.filter(acc => acc.ac_type == "savings").forEach(acc => console.log(acc.acno));

// q3. print bal of acc no 1000

// let first = accounts.find(data => data.acno == 1000).balance
// console.log(first);

// q4. print all gpay transaction details

// var trans = accounts.map(data => data.transactions).flat() // flat function converts a nested array to a single array (to apply filter fn)
// trans.filter(data => data.method == "g-pay").forEach(data => console.log(data));

// q5. print all credit transactions of acc no 1002

// var res = accounts.map(data => data.transactions).flat().filter(data => data.to == 1002).forEach(data => console.log(data));

//q6. print account details of highest bal acc

// accounts.sort((d1,d2) => d2.balance - d1.balance).flat()
// console.log(accounts[0]);

// q7. credit and debit transaction history of acc no 1002

var debitT = accounts.find(data => data.acno == 1002).transactions
// console.log(debitT);
var creditT = accounts.map(data => data.transactions).flat().filter(data => data.to == 1002)
// console.log(creditT);

var transactionHistory = {"credit_transactions": creditT, "debit_transactions": debitT} // creating an object
console.log(transactionHistory);