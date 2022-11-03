function updateDate() {
  //Alaska
  let nomeElement = document.querySelector("#nome");
  if (nomeElement) {
    let nomeDateElement = nomeElement.querySelector(".date");
    let nomeTimeElement = nomeElement.querySelector(".time");
    let nomeTime = moment().tz("America/Nome");

    nomeDateElement.innerHTML = nomeTime.format("dddd Do MMMM YYYY");
    nomeTimeElement.innerHTML = nomeTime.format("h:mm:ss [<small>]A[<?small>]");
  }

  //Antarctica
  let mcMurdoElement = document.querySelector("#mcMurdo");
  if (mcMurdoElement) {
    let mcMurdoDateElement = mcMurdoElement.querySelector(".date");
    let mcMurdoTimeElement = mcMurdoElement.querySelector(".time");
    let mcMurdoTime = moment().tz("Antarctica/McMurdo");

    mcMurdoDateElement.innerHTML = mcMurdoTime.format("dddd Do MMMM YYYY");
    mcMurdoTimeElement.innerHTML = mcMurdoTime.format(
      "h:mm:ss [<small>]A[<?small>]"
    );
  }

  //Faroe
  let torshavnElement = document.querySelector("#torshavn");
  if (torshavnElement) {
    let torshavnDateElement = torshavnElement.querySelector(".date");
    let torshavnTimeElement = torshavnElement.querySelector(".time");
    let torshavnTime = moment().tz("Atlantic/Faroe");

    torshavnDateElement.innerHTML = torshavnTime.format("dddd Do MMMM YYYY");
    torshavnTimeElement.innerHTML = torshavnTime.format(
      "h:mm:ss [<small>]A[<?small>]"
    );
  }
  //Marsa Matruh
  let marsaMatruhElement = document.querySelector("#marsa-matruh");
  if (marsaMatruhElement) {
    let marsaMatruhDateElement = marsaMatruhElement.querySelector(".date");
    let marsaMatruhTimeElement = marsaMatruhElement.querySelector(".time");
    let marsaMatruhTime = moment().tz("Africa/Cairo");

    marsaMatruhDateElement.innerHTML =
      marsaMatruhTime.format("dddd Do MMMM YYYY");
    marsaMatruhTimeElement.innerHTML = marsaMatruhTime.format(
      "h:mm:ss [<small>]A[<?small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
  <div>
  <h2>${cityName}</h2>
  <div class="date">${cityTime.format("dddd Do MMMM YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="index.html">Back to homepage</a>🌏`;
}

updateDate();
setInterval(updateDate, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
