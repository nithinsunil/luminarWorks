var employees = [
    [1000, "ram", 15000, "hr", 1990, 2000],
    [1001, "ravi", 25000, "hr", 1989, 2005],
    [1002, "akhil", 7000, "developer", 2000, 2010],
    [1003, "nikil", 35000, "developer", 2010, 2015],
    [1004, "ajesh", 35000, "mrkt", 1991, 2010],
    [1005, "tom", 40000, "ba", 1990, 2015],
    [1006, "jack", 32000, "ba", 2001, 2010],
]

// 1. print all employee names

// for (let employee of employees) {
//     console.log(employee[1]);
// }

// 2. print developer details

// for (let employee of employees) {
//     if (employee[3] == "developer") {
//         console.log(employee);
//     }
// }

// 3. print experience of each employee

// var exp = 0;
// for (let employee of employees) {
//     exp = employee[5] - employee[4]
//     console.log(`${employee[1]}'s experience is ${exp} years`);
// }

// 4. print employees whose experience > 10

// for (let employee of employees) {
//     if (employee[5] - employee[4] > 10) {
//         console.log(employee);
//     }
// }

// 5. print highest salary

// var sal=0;
// for(employee of employees){
//     if(employee[2] > sal)
//     sal=employee[2]
// }
// console.log(sal);

// 6. second highest salary

// employees.sort((e1, e2) => e2[2] - e1[2]) // sorting array in descending order
// console.log(employees[1] [2]);

// 7. minimum salary

// var min = employees[0] [2]
// for (emp of employees) {
//     if (emp[2] < min) {
//         min = emp[2]
//     }
// }
// console.log(min);

// 8 . number of employees

// console.log(employees.length);

// 9. highest salary among developers

// var sal=0;
// for(emp of employees){
//     if(emp[3] == "developer" && emp[2] > sal){
//         sal=emp[2]
//     }
// }
// console.log(sal);

// 10. print details of employees whose name starts with "A"

// for(emp of employees){
//     if(emp[1] [0] == ("a" || "A") ){
//         console.log(emp);
//     }
// }

// 11. print details of employees who were working in the period of 2010 to 2015

// for(emp of employees){
//     if(emp[4] >= 2010 && emp[5] <= 2015){
//         console.log(emp);
//     }
// }