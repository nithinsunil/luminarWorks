
// q1) find common elements from 2 arrays
var arr1 = [10, 11, 20, 21], arr2 = [11, 12, 20, 21];
var p1 = 0, p2 = 0;

while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
        console.log(`common element : ${arr1[p1]}`);
        p1++;
        p2++;
    }
    else if (arr1[p1] < arr2[p2]){
        p1++;
    }
    else if(arr1[p1] > arr2[p2]){
        p2++;
    }
}


// q2) search element exist or not
// var arr = [10, 11, 15, 20, 21]
// element = 15;