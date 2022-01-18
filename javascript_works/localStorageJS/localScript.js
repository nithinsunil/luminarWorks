// localStorage.setItem("username", "abc")
// localStorage.setItem("password", "abc123")

// const pwd = localStorage.getItem("password")
// console.log(pwd);

var account = {
    accno: 1001,
    personName: "ravi",
    actype: "savings",
    balance: 25000,
    password: "abc1234"
}

var details = JSON.parse(localStorage.getItem(1000))
console.log(details.accno, details.password);
console.log(1004 in localStorage); // to check whether a key is present in local storage
