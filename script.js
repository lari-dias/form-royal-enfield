// validação do modelo da moto
const campos = document.querySelectorAll(".required");
const erroModelo = document.getElementById("erro-modelo");

function modelValidate() {
  if (campos[0] && campos[0].value.length < 3) {
    campos[0].style.borderColor = "red";
    erroModelo.textContent = "No minimo 3 caracteres";
    erroModelo.style.color = "red";
    erroModelo.style.fontSize = "15px";
  } else if (campos[0]) {
    campos[0].style.borderColor = "green";
    erroModelo.textContent = "Validado com sucesso!";
    erroModelo.style.color = "green";
    erroModelo.style.fontSize = "15px";
  }
}
// validação do ano da moto
const erroAno = document.getElementById("erro-ano");

function yearValidate() {
  if (campos[1] && (campos[1].value.length !== 4 || isNaN(campos[1].value))) {
    campos[1].style.borderColor = "red";
    erroAno.textContent = "O ano deve ter 4 dígitos";
    erroAno.style.color = "red";
  } else if (campos[1]) {
    campos[1].style.borderColor = "green";
    erroAno.textContent = "Validado com sucesso!";
    erroAno.style.color = "green";
    erroAno.style.fontSize = "15px";
  }
}
// validação do preço da moto
const erroPreco = document.getElementById("erro-preco");

function priceValidate() {
  if (campos[2] && (campos[2].value === "" || Number(campos[2].value) <= 0)) {
    campos[2].style.borderColor = "red";
    erroPreco.textContent = "O preço é obrigatório";
    erroPreco.style.color = "red";
  } else if (campos[2]) {
    campos[2].style.borderColor = "green";
    erroPreco.textContent = "Validado com sucesso!";
    erroPreco.style.color = "green";
    erroPreco.style.fontSize = "15px";
  }
}
// validação do proprietário e e-mail
const erroNome = document.getElementById("erro-nome");
const erroEmail = document.getElementById("erro-email");
const campoNome = document.getElementById("vendedor");
const campoEmail = document.getElementById("email");

function nomeValidate() {
  if (campoNome.value.trim().length < 3) {
    campoNome.style.borderColor = "red";
    erroNome.textContent = "O seu nome é obrigatório";
    erroNome.style.color = "red";
    erroNome.style.fontSize = "15px";
  } else {
    campoNome.style.borderColor = "green";
    erroNome.textContent = "Validado com sucesso!";
    erroNome.style.color = "green";
    erroNome.style.fontSize = "15px";
  }
}

function emailValidate() {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(campoEmail.value)) {
    campoEmail.style.borderColor = "red";
    erroEmail.textContent = "Digite um e-mail válido";
    erroEmail.style.color = "red";
    erroEmail.style.fontSize = "15px";
  } else {
    campoEmail.style.borderColor = "green";
    erroEmail.textContent = "Validado com sucesso!";
    erroEmail.style.color = "green";
    erroEmail.style.fontSize = "15px";
  }
}
