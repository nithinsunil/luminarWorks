var baleno = {
    manufacture: "nexa",
    colors: ["red", "white", "blue"],
    variants: "petrol",
    price: "8 lakhs"
}

var glanza = {
    manufacture: "toyota",
    price: "9 lakhs"
}

glanza.__proto__=baleno // galanza gets data not in glanza from baleno 
console.log(glanza.variants);