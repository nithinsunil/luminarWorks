try {
    var expr = "^2+3*5-4*2"
    console.log(eval(expr));
}
catch (error) {
    console.log(error.message);
}

finally {
    console.log("process 2");
    console.log("process 3");
}