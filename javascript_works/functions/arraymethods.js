var arr = [2, 3, 4, 5, 6, 7, 8]

var isEven = arr.some(n1 => n1 % 2 == 0) // is there an even number in the array using some() fn
console.log(isEven);

// var squares = arr.map(num => num ** 2) // using map() function to find square of all elements of array
// console.log(squares);

// var add_two = arr.map(num => num + 2)
// console.log(add_two);

// var names = ["arjun", "akhil", "aravind", "ram", "ravi", "Abhilash"]

// var anames = names.filter(name => name[0] == "a" || name[0] == "A") // using filter() function to find people with first letter a.
// console.log(anames);


// var sum = arr.reduce((n1, n2) => n1 + n2) // sum using reduce() function
// console.log(sum);

// max value

// var max = arr.reduce((n1, n2) => n1>n2?n1:n2)
// console.log(max);

// min value

// var min = arr.reduce((n1, n2) => n1>n2?n2:n1)
// console.log(min);