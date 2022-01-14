console.log("line 1");
console.log("line 2");
setTimeout(()=>{
    console.log("line 3");
},3000)
console.log("line 4");
setTimeout(()=>{
    console.log("line 5");
},2000)
setTimeout(() => {
    console.log("line 6"); 
}, 0);