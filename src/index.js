function updateDate() {
  //Alaska
  let nomeElement = document.querySelector("#nome");
  let nomeDateElement = nomeElement.querySelector(".date");
  let nomeTimeElement = nomeElement.querySelector(".time");
  let nomeTime = moment().tz("America/Nome");

  nomeDateElement.innerHTML = nomeTime.format("MMMM Do MMMM YYYY");
  nomeTimeElement.innerHTML = nomeTime.format("h:mm:ss [<small>]A[<?small>]");

  //Antarctica
  let mcMurdoElement = document.querySelector("#mcMurdo");
  let mcMurdoDateElement = mcMurdoElement.querySelector(".date");
  let mcMurdoTimeElement = mcMurdoElement.querySelector(".time");
  let mcMurdoTime = moment().tz("Antarctica/McMurdo");

  mcMurdoDateElement.innerHTML = mcMurdoTime.format("MMMM Do MMMM YYYY");
  mcMurdoTimeElement.innerHTML = mcMurdoTime.format(
    "h:mm:ss [<small>]A[<?small>]"
  );

  //Faroe
  let torshavnElement = document.querySelector("#torshavn");
  let torshavnDateElement = torshavnElement.querySelector(".date");
  let torshavnTimeElement = torshavnElement.querySelector(".time");
  let torshavnTime = moment().tz("Atlantic/Faroe");

  torshavnDateElement.innerHTML = torshavnTime.format("MMMM Do MMMM YYYY");
  torshavnTimeElement.innerHTML = torshavnTime.format(
    "h:mm:ss [<small>]A[<?small>]"
  );
  //Marsa Matruh
  let marsaMatruhElement = document.querySelector("#marsa-matruh");
  let marsaMatruhDateElement = marsaMatruhElement.querySelector(".date");
  let marsaMatruhTimeElement = marsaMatruhElement.querySelector(".time");
  let marsaMatruhTime = moment().tz("Africa/Cairo");

  marsaMatruhDateElement.innerHTML =
    marsaMatruhTime.format("MMMM Do MMMM YYYY");
  marsaMatruhTimeElement.innerHTML = marsaMatruhTime.format(
    "h:mm:ss [<small>]A[<?small>]"
  );
}
updateDate();
setInterval(updateDate, 1000);
