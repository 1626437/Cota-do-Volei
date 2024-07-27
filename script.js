let inputAdultos = document.querySelector("#participantes");
let valorHora = document.querySelector("#valorHora");
let inputDuracao = document.querySelector("#controlaRadios");
let resultado = document.querySelector("#resultado");

let fieldPartipante1hora = document.getElementById("pessoasporHora");
fieldPartipante1hora.style.display = "none";

function checkFormFields() {
  
let inputDuracaoActual = document.querySelector("#controlaRadios");
  if (inputDuracaoActual.value == "hora2") {
    fieldPartipante1hora.style.display = "block";
  } else {
    fieldPartipante1hora.style.display = "none";
  }
}

function calc() {
  let participantes1Hora = document.querySelector("#pessoasporHora");
  let adultos = inputAdultos.value;
  let valor = valorHora.value;
  let duracao = inputDuracao.value;
  let pessoasPorHora = participantes1Hora.value;

  if (
    adultos == null ||
    adultos == "" ||
    valor == null ||
    valor == "" ||
    (duracao != "hora1" && duracao != "hora2")
  ) {
    alert("Preencha todos os campos");
  } else {
    //Lógica que cria a divisão de quantidade de Valor por Hora
    if (duracao == "hora1") {
      let valorTotal = valor / adultos;
      document.querySelector("#resultado").style.display = "block";

      resultado.innerHTML = `<h3 class="ball"> A Cota Será:</h3>`;
      resultado.innerHTML += `<p>Para cada Jogador é de R$ ${valorTotal.toFixed(
        2
      )}</p>`;
      resultado.innerHTML += `<p class="player"> </p>`;
    } else {
      if (pessoasPorHora == 0) {
        let valorQuadra = valor * 2;
        let valorTotal = valorQuadra / adultos;
        document.querySelector("#resultado").style.display = "block";

        resultado.innerHTML = `<h3 class="ball"> A Cota Será:</h3>`;
        resultado.innerHTML += `<p>Para cada Jogador é de R$ ${valorTotal.toFixed(
          2
        )}</p>`;
        resultado.innerHTML += `<p> O Total da Quadra é de R$ ${valorQuadra.toFixed(
          2
        )}</p>`;
        resultado.innerHTML += `<p class="player"> </p>`;
      } else {
        let valorAux = adultos - pessoasPorHora;
        let valorPesso1Hora = valor / adultos;
        let valorPesso2Hora = valor / valorAux + valorPesso1Hora;
        let valorQuadra = valor * 2;
        document.querySelector("#resultado").style.display = "block";

        resultado.innerHTML = `<h3 class="ball"> A Cota Será:</h3>`;
        resultado.innerHTML += `<p>Jogador que irá jogar 1 hora é de R$ ${valorPesso1Hora.toFixed(
          2
        )}</p>`;
        resultado.innerHTML += `<p>Jogador que irá jogar 2 horas é de R$ ${valorPesso2Hora.toFixed(
          2
        )}</p>`;
        resultado.innerHTML += `<p> O Total da Quadra é de R$ ${valorQuadra.toFixed(
          2
        )}</p>`;
        resultado.innerHTML += `<p class="player"> </p>`;
      }
    }
  }
}
