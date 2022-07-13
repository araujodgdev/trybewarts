let buttonEntrar = document.getElementById("button-entrar");

buttonEntrar.addEventListener("click", function (event) {
  let inputEmail = document.getElementById("input-email").value;
  let inputSenha = document.getElementById("input-senha").value;
  let testeEmail = inputEmail === "tryber@teste.com";
  let testeSenha = inputSenha === "123456";
  if (testeEmail && testeSenha) {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
  event.preventDefault();
});
