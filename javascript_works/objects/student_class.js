// class student {
//     setStudent(name, age, gender){ // method to set student details
//         this.name=name
//         this.age=age
//         this.gender=gender
//     }
    
//     printStudent(name, age, gender){ // method to print the student details
//         console.log(this.name, this.age, this.gender);
//     }
// }

// var obj = new student() // creating new object
// obj.setStudent("akhil", 20, "male") // calling setStudent() method
// obj.printStudent() // calling printStudent() method

// var obj1 = new student()
// obj1.setStudent("amal", 22, "male")
// obj1.printStudent()


// USING CONSTRUCTOR

class student {
    constructor(... args){ 
        this.name=args[0]
        this.age=args[1]
        this.gender=args[2]
    }
    
    printStudent(name, age, gender){ // method to print the student details
        console.log(this.name, this.age, this.gender);
    }
}

var obj = new student("akhil", 20, "male") // creating new object and initializing in the same line (because we used constructor)
 // calling setStudent() method
obj.printStudent() // calling printStudent() method

var obj1 = new student("amal", 22, "male")

obj1.printStudent()