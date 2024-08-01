const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando">';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste">';
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`;
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaMediaFinal();
});

function adicionaLinha() {
  const inputAtividade = document.getElementById("nome-atividade");
  const inputNota = document.getElementById("nota-atividade");

  if (atividades.includes(inputAtividade.value)) {
    alert(`A atividade ${inputAtividade.value} já foi adicionada`);
  } else {
    atividades.push(inputAtividade.value);
    notas.push(parseFloat(inputNota.value));

    let linha = `<tr>`;
    linha += `<td>${inputAtividade.value}</td>`;
    linha += `<td>${inputNota.value}</td>`;
    linha += `<td>${
      inputNota.value >= notaMinima ? imgAprovado : imgReprovado
    }</td>`;
    linha += `<tr></tr>`;

    linhas += linha;
  }

  inputAtividade.value = "";
  inputNota.value = "";
}

function atualizaTabela() {
  let corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
  const mediaFinal = calculaMediaFinal();

  document.getElementById("media-final-valor").innerHTML = mediaFinal;
  document.getElementById("media-final-resultado").innerHTML =
    mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
  let somaDasNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }

  return somaDasNotas / notas.length;
}
