var pattern = "ABABBC"
wc = {}

// method 1 
// for (let char of pattern) {
//     if (char in wc) {
//         console.log(`first recursive character is ${char}`);
//         break
//     }
//     else {
//         wc[char] = 1
//     }
// }
console.log(wc);

// method 2
// var op = [] // creating an array to store all the recursive elements
// pattern.split("").map(char => char in wc ? op.push(char) : wc[char] = 1)
// console.log(op[0]);

let add=(... args)=> args.reduce((n1, n2) => n1+n2) // using spread operator for sum of any numbers
console.log(add(10, 10, 50, 50)); // we can enter any number of inputs