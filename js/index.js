const data = "data.json";
const countriesContainer = document.querySelector(".countries");

function getMoreData(country) {
  const name = country.name;
  const nativeName = country.nativeName;
  const population = country.population;
  const region = country.region;
  const subRegion = country.subregion;
  const capital = country.capital;
  const topLevelDomain = country.topLevelDomain;
  const currencies = country.currencies;
  const languages = country.languages;
  const borderCountries = country.borders;
  const flag = country.flag;

  const countryDetailsContainer = document.createElement("div");
  countryDetailsContainer.classList.add("country-detail");
  countryDetailsContainer.innerHTML = `<button class="back">
  <i class="fa-solid fa-arrow-left"></i> Back
</button>
<div class="country-detail__more">
  <div class="country-detail__flag">
    <img
      src="${flag}"
      alt=""
    />
  </div>
  <div class="country-detail__info info">
    <h2 class="info__name">${name}</h2>
    <div class="info__detail">
      <p>Native Name: <span id="native-name">${nativeName}</span></p>
      <p>Population: <span id="population">${population}</span></p>
      <p>Region: <span id="region">${region}</span></p>
      <p>Sub Region: <span id="sub-region">${subRegion}</span></p>
      <p>Capital: <span id="capital">${capital}</span></p>
    </div>
    <div class="info__detail">
      <p>Top Level Domain: <span id="top-level-domain">${topLevelDomain}</span></p>
      <p>Currencies: <span id="curriences">${currencies[0].name}</span></p>
      <p>
        Languages: <span id="languages">${languages[0].name}</span>
      </p>
    </div>
    <div class="info__detail">
      <p>Border Countries</p>
      <button>${borderCountries[0]}</button>
    </div>
  </div>
</div>`;

  countriesContainer.style.display = "none";
  document.body.append(countryDetailsContainer);
}

function showMoreAboutCountry() {
  const country = this.querySelector(".info__name").textContent;

  fetch(data)
    .then((response) => response.json())
    .then((response) => {
      for (let index = 0; index < response.length; index++) {
        if (response[index].name === country) {
          getMoreData(response[index]);
        }
      }
    });
}

async function getCountries() {
  const countries = document.querySelectorAll(".country");
  countries.forEach((country) => {
    country.addEventListener("click", showMoreAboutCountry);
  });
}

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
  getCountries();
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
        getData(response[index]);
      }
    });
}

window.addEventListener("DOMContentLoaded", showWebsite);
