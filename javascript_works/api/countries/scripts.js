function fetchCountryData(){
    let countryName = country_name.value;

    fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`).
    then(res=>res.json())
    .then(data=> populateValues(data))
    
   
}

function populateValues(country){
    console.log(country[0])
    let cName = country[0].name
    let flag = country[0].flag
    let population = country[0].population
    let currencyName = country[0].currencies[0].name
    let currencySymbol = country[0].currencies[0].symbol
    let language = country[0].languages[0].name
    let capital = country[0].capital
    html_data = `
    <div class="card" style="width: 18rem;">
    <img src="${flag}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Country Name: ${cName}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Population: ${population}</li>
      <li class="list-group-item">Currency Name: ${currencyName}</li>
      <li class="list-group-item">Currency Symbol: ${currencySymbol}</li>
      <li class="list-group-item">Language: ${language}</li>
      <li class="list-group-item">Capital: ${capital}</li>
    </ul>
    `
    document.querySelector("#result").innerHTML = html_data

}