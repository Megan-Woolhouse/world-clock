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

setInterval(updateTime, 1000);
