var text = "hello hai hello hai"

// method 1
// var wc = {}
// var words = text.split(" ") // words = ["hello", "hai", "hello", "hai"]
// for(let word of words){
//     if(word in wc){
//         wc[word]+=1 // incrementing property "word"
//     }
//     else{
//         wc[word] = 1 // assigning property "word"
//     }
// }
// console.log(wc);

// method 2
var wc={}
text.split(" ").map(word => word in wc? wc[word]+= 1: wc[word] = 1)
console.log(wc); 