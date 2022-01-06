var a = 24, b = 4, hcf = 0, i;
for (i = 1; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
        hcf = i;
    }
}
console.log(hcf);