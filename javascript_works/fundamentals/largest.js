var a = 10;
var b = 20;
var c = 30;


// largest among two numbers

// console.log(a>b?"A is greater than B":"B is greater than A");


// largest among three numbers

// if(a>b&&a>c){
//     console.log("a is greater");
// }
// else if(b>c){
//     console.log("b is greater");
// }
// else{
//     console.log("c is greater");
// }


// second largest among three numbers

if (a > b && a > c) {
    if (b > c) {
        console.log("b is second largest num");
    }
    else {
        console.log("c is second largest num");
    }
}