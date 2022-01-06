var arr = [2, 3, 4, 5]
var sum = 5

// for (i of arr) {
//     for (j of arr) {
//         if (i + j == sum) {
//             console.log(`pairs are (${i}, ${j})`);
//         }
//     }
// }

var low = 0; upp = arr.length - 1;

while (low < upp) {
    let curr_sum = arr[low] + arr[upp];
    if (curr_sum == sum) {
        console.log(`pairs are ${arr[low]}, ${arr[upp]}`);
        break
    }
    else if (curr_sum < sum) {
        low++
    }
    else if (curr_sum > sum) {
        upp--
    }
}

