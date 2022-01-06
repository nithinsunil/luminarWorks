// num is the power
// start from one
// print numbers whose power is between low and upp

var num = 3, low = 8, upp = 30;
for(let i=1; i<=upp; i++){
    let res=i**num;
    if(res>=low && res<= upp){
        console.log(i);
    }
}
