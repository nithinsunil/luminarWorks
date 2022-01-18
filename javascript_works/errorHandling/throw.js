// try {
//     var phn = "9798949598"
//     if (phn.length != 10) {
//         throw new Error("invalid phone number")
//     }
//     else {
//         console.log("access granted");
//     }
// }
// catch (error) {
//     console.log(error.message);
// }



// age must be a number, else throw error
try {
    var age = "a19"
    if (isNaN(age) == true) { // if(isNaN(age))
        throw new Error("invalid age value")
    }
    else {
        console.log("access granted for age");
    }
}
catch (error) {
    console.log(error.message);
}
