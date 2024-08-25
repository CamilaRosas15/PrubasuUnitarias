import {generarFizzBuzz,generarSecuenciaHasta} from "./fizzbuzz";

const numero = document.querySelector("#numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numerosUsr = Number.parseInt(numero.value);

  div.innerHTML = "<p>" + "Numero: " + generarFizzBuzz(numerosUsr) + " Secuencia: " + generarSecuenciaHasta(numerosUsr) + "</p>";
  //div.innerHTML = "<p>" + "Secuencia: " + generarSecuenciaHasta(numerosUsr) + "</p>";
});
