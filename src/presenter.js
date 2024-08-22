import {generarFizzBuzz,generarSecuenciaHasta} from "./fizzbuzz";

const numero = document.querySelector("#numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numerosUsr = Number.parseInt(numero.value);

  div.innerHTML = "<p>" + generarFizzBuzz(numerosUsr) + "</p>";
});
