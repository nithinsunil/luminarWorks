for (let row = 1; row <= 4; row++) {
    for (let col = 1; col <= 7; col++) {
        if (row == 4 || row + col == 5 || col - row == 3) {
            console.log("*")
        }
         else {
             console.log(" ")
         }
    }
}