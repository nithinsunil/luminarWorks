var num=123;
var res=0;
cube=0;
while(num!=0){ //123!=0..
    let digit=(num%10); //123%10=3
    res=Math.pow(digit,digit); //3*3*3
    cube+=res;
    num=Math.floor(num/10);//12

}
console.log(cube);

