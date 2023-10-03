function updateTime() {
  let londonDateElement = document.querySelector("#london .date");
  let londonTimeElement = document.querySelector("#london .time");

  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("MMMM Do YYYY");

  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("h:mm:ss [<small>]A[</small>]");

  let sofiaDateElement = document.querySelector("#sofia .date");
  let sofiaTimeElement = document.querySelector("#sofia .time");

  sofiaDateElement.innerHTML = moment()
    .tz("Europe/Sofia")
    .format("MMMM Do YYYY");

  sofiaTimeElement.innerHTML = moment()
    .tz("Europe/Sofia")
    .format("h:mm:ss [<small>]A[</small>]");

  let parisDateElement = document.querySelector("#paris .date");
  let parisTimeElement = document.querySelector("#paris .time");

  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("MMMM Do YYYY");

  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("h:mm:ss [<small>]A[</small>]");

  let chicagoDateElement = document.querySelector("#chicago .date");
  let chicagoTimeElement = document.querySelector("#chicago .time");

  chicagoDateElement.innerHTML = moment()
    .tz("America/Chicago")
    .format("MMMM Do YYYY");

  chicagoTimeElement.innerHTML = moment()
    .tz("America/Chicago")
    .format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityTimezone).format("MMMM Do YYYY");
  let cityTime = moment()
    .tz(cityTimezone)
    .format("h:mm:ss [<small>]A[</small>]");

  let selectedCityElement = document.querySelector("#cities");
  selectedCityElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
          </div>
          <div>
          <button>
          <a href="index.html" class="home-link"> Back to all cities</a>
        </button>
        </div>
          `;
}

let citySelectorElement = document.querySelector("#city-selector");
citySelectorElement.addEventListener("change", updateCity);
