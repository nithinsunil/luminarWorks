var mobiles = [
    [1000, "samsung", "samsung f41", 15000, "snapdragon", "AMOLED", "4G"],
    [1001, "samsung", "samsung A51", 32000, "snapdragon", "AMOLED", "5G"],
    [1002, "redmi", "not 10 pro", 19000, "snapdragon", "LED", "4G"],
    [1003, "redmi", "mi 11 lite ", 30000, "mediatek", "LED", "4G"],
    [1004, "apple", "12 pro", 72000, "snapdragon", "AMOLED", "4G"],
    [1005, "apple", "12 pro max", 100000, "snapdragon", "AMOLED", "5G"],
    [1006, "one plus", "nord 2", 29000, "snapdragon", "AMOLED", "4G"],
    [1007, "one plus", "nord 2", 15000, "mediatek", "LED", "4G"],
]


    var mobById = mobiles.find(mob => mob[0] == 1000) // details of mobile with id= 1000 using find() function
    console.log(mobById);

// lowest price

// var low = mobiles.reduce((p1, p2) => p1[3]<p2[3]?p1:p2)
// console.log(low);

// highest price using reduce() fn

// var high = mobiles.reduce((p1, p2)=>p1[3]<p2[3]?p2:p1)
// console.log(high);

// list all samsung mobile names whose band= 4g and AMOLED display

// var sam_mob = mobiles.filter(mob => mob[1] == "samsung" && mob[6] == "4G" && mob[5] == "AMOLED").map(mob => mob[2])
// console.log(sam_mob);

// list all 5G mobile names under 25k
// var mob_range = mobiles.filter(mob => mob[3] <= 25000 && mob[6] == "5G").map(mob => mob[2])
// console.log(mob_range);

// mobiles from 25-30k

// var mob_range = mobiles.filter(mob => mob[3] >= 25000 && mob[3] <= 30000)
// console.log(mob_range);


// mobiles under 25k using filter()

// var mob_25 = mobiles.filter(mob => mob[3] < 25000).map(mob => [mob[2], mob[3]])
// console.log(mob_25);

// samsung mobiles using fiter() function

// var sam_mob = mobiles.filter(mob => mob[1] == "samsung").map(mob => mob[2]) // using map() and filter() fns at same time 
// console.log(sam_mob);

// print all mobile names using map() function

// var mob_names = mobiles.map(mob => mob[2])
// console.log(mob_names);

// print all mobile price using map() function

// var mob_price = mobiles.map(mob => mob[3])
// console.log(mob_price);

// costly mobile

// mobiles.sort((m1, m2) => m2[3] - m1[3]) // sort in desc order
// console.log(mobiles[0]); 

// phones with snam=pdragon processor

// for(mob of mobiles){
//     if(mob[4] == "snapdragon"){
//         console.log(mob);
//     }
// }

// phones with 5g under 40k

// for(let mob of mobiles){
//     if(mob[3] < 40000 && mob[6] == "5G"){
//         console.log(mob);
//     }
// }

// costly proccessor with snapdragon and 5g

// mobiles.sort((m1, m2) => m2[3] - m1[3])
// for (let mob of mobiles) {
//     if (mob[4] == "snapdragon" && mob[6] == "5G") {
//     }
// }
// console.log(mobiles[0]);

// is there any mobile which i can purchase under 10k

// for(let mob of mobiles){
//     if(mob[3] < 10000){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
// }
