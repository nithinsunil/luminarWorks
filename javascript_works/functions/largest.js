function largestAmongTwo(num1, num2){
    if(num1>num2){
        console.log(`num1 is larger`);
    }
    else if(num2>num1){
        console.log(`num2 is larger`);
    }
    else{
        console.log("numbers are same");
    }
}

console.log(largestAmongTwo(10, 5));

