var arr = [2, 4, 6, 8, 10, 12, 14, 16]
arr.sort((n1, n2) => n1 - n2)
var low = 0, upp = arr.length - 1;
element = 4;
flag = 0;

while (low < upp) {
    let mid = Math.floor((low + upp / 2))
    // case 1 
    if (element == arr[mid]) {
        flag = 1;
        break
    }
    // case 2 
    else if (element > arr[mid]) { 
        low = mid + 1;
    }
    // case 3 
    else if (element < arr[mid]) { 
        upp = mid - 1;
    }
}
console.log(flag == 0 ? "not found" : "found");