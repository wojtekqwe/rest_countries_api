const data = "data.json";
const countriesContainer = document.querySelector(".countries");

function generateFlag(
  countryName,
  populationInCountry,
  regionName,
  capitalCountry,
  flagImage
) {
  const countryContainer = document.createElement("div");
  countryContainer.classList.add("country");
  countryContainer.innerHTML = `<div class="country__flag">
  <img src = '${flagImage}'
    alt=""
  />
</div>
<div class="country__info info">
  <h2 class="info__name">${countryName}</h2>
  <p class="info__population">
    Population: <span id="population">${populationInCountry}</span>
  </p>
  <p class="info__continent">
    Region: <span id="continent">${regionName}</span>
  </p>
  <p class="info__capital">
    Capital: <span id="capital">${capitalCountry}</span>
  </p>
</div>`;

  countriesContainer.append(countryContainer);
}

function getData(element) {
  const country = element.name;
  const population = element.population;
  const region = element.region;
  const capital = element.capital;
  const flag = element.flags.svg;

  generateFlag(country, population, region, capital, flag);
}

function showWebsite() {
  fetch(data)
    .then((response) => response.json())
    .then((response) => {
      for (let index = 0; index < response.length; index++) {
        // console.log(response[index].name);
        getData(response[index]);
      }
    });
}

window.addEventListener("DOMContentLoaded", showWebsite);
