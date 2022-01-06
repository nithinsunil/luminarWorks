var covid_data = [
    [1, "trivandrum", 40000, 200, 38000, 8, 5],
    [2, "kollam", 35000, 250, 33000, 7, 3],
    [3, "kottayam", 50000, 500, 45000, 5, 2],
    [4, "alappuzha", 25000, 150, 24000, 9, 5],
    [5, "ernakulam", 70000, 500, 65000, 9, 5],
    [6, "thrissur", 65000, 550, 60000, 8, 7],
    [7, "idukki", 1000, 50, 9500, 9, 6]
]

// q1 higest test + ve case district

// var high = covid_data.reduce((d1, d2) => d1[2] > d2[2] ? d1 : d2)[1]
// console.log(high);

// q2 district with higest 1 dose vaccination rate

// var highFirst = covid_data.reduce((d1, d2) => d1[5] > d2[5] ? d1:d2)[1]
// console.log(highFirst);

// q3 district with lowest death cases

// var lowDeath = covid_data.reduce((d1, d2) => d1[3] < d2[3] ? d1:d2)[1]
// console.log(lowDeath);

// q4 sort district with +ve cases

// var sortPos = covid_data.sort((d1, d2) => d1[2] - d2[2])
// console.log(sortPos);

// q5 sort the districts based on 1st dose

// var sortFirst = covid_data.sort((d1, d2) => d1[5] - d2[5])
// console.log(sortFirst);

// q6 is there any states with +ve cases > 60000

// var cases = covid_data.some(d1 => d1[2] > 60000)
// console.log(cases);

// q7 print thrissur details

// var thrissur = covid_data.filter(d1 => d1[1] == "thrissur")
// console.log(thrissur);

// q8 total number of +ve cases

var caseSum = covid_data.reduce((d1, d2) => d1[2] + d2[2])
console.log(caseSum);

// q9 total number of cured cases

var totCured = covid_data.reduce((d1, d2) => d1[4] + d2[4])
console.log(totCured);

// q10 cured numbers of idukki

// var idukkiCured = covid_data.find(d1 => d1[1] == "idukki")[4]
// console.log(idukkiCured);

// q11 total number of death cases

var totDeath = covid_data.reduce((d1, d2) => d1[3] + d2[3])
console.log(totDeath);