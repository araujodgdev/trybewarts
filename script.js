const buttonEntrar = document.getElementById("button-entrar");

buttonEntrar.addEventListener("click", (event) => {
  const inputEmail = document.getElementById("input-Email").value;
  const inputSenha = document.getElementById("input-senha").value;
  const testeEmail = inputEmail === "tryber@teste.com";
  const testeSenha = inputSenha === "123456";
  if (testeEmail && testeSenha) {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
  event.preventDefault();
});
// segue abaixo função para o requisito 18, botão submit
const submitBtn = document.getElementById("submit-btn");
const agree = document.getElementById("agreement");
submitBtn.toggleAttribute("disabled");

function enableSubmit() {
  submitBtn.toggleAttribute("disabled");
}

agree.addEventListener("change", enableSubmit);


// segue abaixo a implementação do contador de caracteres do text area - Requisito 20;
const textArea = document.getElementById("textarea");
let charCounter = document.getElementById("counter");
let charLeft = 500;
charCounter.innerHTML = `Caracteres restantes: ${charLeft}`;

textArea.addEventListener("input", () => {
  let textoAtual = textArea.value.length;
  charLeft = 500 - textoAtual;
  charCounter.innerHTML = `Caracteres restantes: ${charLeft}`;
});
