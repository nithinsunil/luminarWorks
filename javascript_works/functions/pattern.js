var pattern = "BABACC"
var op = []

for(let char of pattern){
    if(op.includes(char)){
        console.log(`first recurring character is ${char}`);
        break
    }
    else{
        op.push(char)
    }
}