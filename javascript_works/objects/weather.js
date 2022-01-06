var dataset = [

    { district: "palakkad", temparature: 30 },
    { district: "tvm", temparature: 31 },
    { district: "palakkad", temparature: 31 },
    { district: "tvm", temparature: 29 },


]

weather_data = {}
for (let data of dataset) {
    let distName = data.district;
    let curTemp = data.temparature;
    if (distName in weather_data) {
        if (weather_data[distName] < curTemp) { // comparing old temp and current temp
            weather_data[distName] = curTemp; // updating temperature if current temperature is greater than oldTemp
        }
    }
    else {
        weather_data[distName] = curTemp; // adding object to weather_data
    }
}
console.log(weather_data);