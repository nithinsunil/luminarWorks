var students = [
    [1000, "akhil", "mearnstack", 145, "mca"],
    [1001, "anu", "mearnstack", 165, "bca"],
    [1002, "nikhil", "django", 175, "bca"],
    [1003, "vijil", "django", 165, "mca"],
    [1004, "tim", "testing", 185, "bca"],
    [1005, "john", "testing", 155, "mca"]

]

// 1. to print all student names

// for(let student of students){
//     console.log(student[1]);
// }

// 2. to print details of mearmstack students

// for(let student of students){
//     if(student[2] == "mearnstack"){
//         console.log(student);
//     }
// }

// 3. print details of students having marks above 160

// for(let student of students){
//     if(student[3] > 160){
//         console.log(student);
//     }
// }

// 4. print names of django batch students whose total > 168

// for(let student of students){
//     if(student[2] == "django" && student[3] > 168){
//         console.log(student[1]);
//     }
// }

// 5. highest total

var grt = 0;
for (let student of students) {
    if (student[3] > grt) {
        grt = student[3]
    }
}
console.log(grt);