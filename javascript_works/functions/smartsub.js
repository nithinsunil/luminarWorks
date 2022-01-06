// Find largest num and subtract low from large

//method 1 (using if)
// function smartSub(num1, num2){
//     if(num1>num2){
//         return num1-num2
//     }
//     else if(num2>num1){
//         return num2-num1
//     }
// }
// console.log(smartSub(5, 25));

// method 2 (using ternary operator)
function smartSub(num1, num2){
    return num1>num2?num1-num2:num2-num1
}
console.log(smartSub(5,25));