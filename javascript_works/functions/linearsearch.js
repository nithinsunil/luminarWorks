arr = [8, 7, 15, 2, 26, 20]
var element = 155, flag= 0;

for(let num of arr){
    if(num == element){
        flag=1;
        break
    }
}
console.log(flag==0?"element not found":"element found");