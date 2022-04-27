// Scroll To Top

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

// Ativa formulário
let nome = document.querySelector("#exampleInputName1");
let email = document.querySelector("#exampleInputEmail1");
let assunto = document.querySelector("#exampleInputSubject1");
let mensagem = document.querySelector("#exampleInputSubject1");

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mensagemOk = false;

// funções formulário

function validaNome() {
  let txtNome = document.querySelector("#txtNome");

  if (nome.value.length < 3) {
    txtNome.innerHTML = "O nome precisa ter mais do que 3 caracteres.";
    txtNome.style.color = "#DC3545";
  } else {
    txtNome.innerHTML = "Nome válido!";
    txtNome.style.color = "#28A745";
    nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "O email precisa ter @ e .";
    txtEmail.style.color = "#DC3545";
  } else {
    txtEmail.innerHTML = "E-mail válido";
    txtEmail.style.color = "#28A745";
    emailOk = true;
  }
}

function validaAssunto() {
	let txtAssunto = document.querySelector("#txtAssunto");

	if (assunto.value.length < 3) {
	  txtAssunto.innerHTML = "O assunto precisa ter mais do que 3 caracteres.";
	  txtAssunto.style.color = "#DC3545";
	} else {
		txtAssunto.innerHTML = "Nome válido!";
		txtAssunto.style.color = "#28A745";
	  assuntoOk = true;
	}
  }

function validaMensagem() {
  let txtMensagem = document.querySelector("#txtMensagem");

  if (mensagem.value.length >= 100) {
    txtMensagem.innerHTML = "Máximo 100 caracteres.";
    txtMensagem.style.color = "#DC3545";
    txtMensagem.style.display = "block";
  } else {
    txtMensagem.style.display = "none";
    mensagemOk = true;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true && mensagemOk == true) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha todos os campos corretamente!");
  }
}