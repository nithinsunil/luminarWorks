var expenses = [10000, 15000, 15000, 13000, 20000, 5000]

// for(i=0; i<expenses.length; i++){
//     console.log(expenses[i]);
// }

// for(let amount of expenses){
//     if(amount>25000){
//     console.log(amount);
//     }
// }

// var max_exp = 0;
// for (let amount of expenses) {
//     if (amount > max_exp) {
//         max_exp = amount
//     }
// }
// console.log(max_exp);


// var min_exp = expenses[0];
// for (let amount of expenses) {
//     if (amount < min_exp) {
//         min_exp = amount;
//     }
// }
// console.log(min_exp);

// for (i = 0; i < expenses.length; i++) {
//     var amt = expenses[i]
//     for (let amount of expenses) {
//         if (amt == amount) {
//             expenses.pop[i]
//         }
//     }
// }
// console.log(expenses);


// To delete duplicate elements (We use a set and load elements to the set, because sets cannot have duplicate values and log the set)
// var st=new Set();
// for(let amount of expenses){
//     st.add(amount)
// }
// console.log(st);

// var unique = []
// for(amount of expenses){
//     if(unique.includes expenses[i]){

//     }
//     else{
//         unique.push(amount)
//     }
// }
// console.log(unique);

var arr = [9, 6, 7, 8, 3, 2]

for(num of arr){
    if(num<5){
        num--
    }
    else if(num>5){
        num++
        
    }
}
console.log(num);