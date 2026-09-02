function login(email, senha) {
  const emailCorreto = "usuario@teste.com";
  const senhaCorreta = "123455";

  return email === emailCorreto && senha === senhaCorreta;
}

module.exports = { login };

if (typeof document !== "undefined") {


// Elementos da tela
const formulario = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");
const botaoMostrarSenha = document.getElementById("mostrarSenha");

if (formulario && emailInput && senhaInput && mensagem && botaoMostrarSenha) {

// Envio do formulário
formulario.addEventListener("submit", function (event) {

  // Evita que a página recarregue
  event.preventDefault();

  const email = emailInput.value;
  const senha = senhaInput.value;

  const resultado = login(email, senha);

  if (resultado) {
    mensagem.textContent = "Login realizado com sucesso!";
    mensagem.className = "mensagem sucesso";
  } else {
    mensagem.textContent = "E-mail ou senha incorretos.";
    mensagem.className = "mensagem erro";
  }

});


// Mostrar ou esconder senha
botaoMostrarSenha.addEventListener("click", function () {

  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    botaoMostrarSenha.textContent = "Ocultar";
  } else {
    senhaInput.type = "password";
    botaoMostrarSenha.textContent = "Mostrar";
  }

});
}
}