const buttonEntrar = document.getElementById('button-entrar');
const evalForm = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');
const materias = document.getElementsByName('conteudo');
let conteudosMarcados = '';

buttonEntrar.addEventListener('click', (event) => {
  const inputEmail = document.getElementById('input-Email').value;
  const inputSenha = document.getElementById('input-senha').value;
  const testeEmail = inputEmail === 'tryber@teste.com';
  const testeSenha = inputSenha === '123456';
  if (testeEmail && testeSenha) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  event.preventDefault();
});
// segue abaixo função para o requisito 18, botão submit
const submitBtn = document.getElementById('submit-btn');
const agree = document.getElementById('agreement');
submitBtn.toggleAttribute('disabled');

function enableSubmit() {
  submitBtn.toggleAttribute('disabled');
}

agree.addEventListener('change', enableSubmit);

// segue abaixo a implementação do contador de caracteres do text area - Requisito 20;
const textArea = document.getElementById('textarea');
const charCounter = document.getElementById('counter');
let charLeft = 500;
charCounter.innerHTML = `Caracteres restantes: ${charLeft}`;

textArea.addEventListener('input', () => {
  const textoAtual = textArea.value.length;
  charLeft = 500 - textoAtual;
  charCounter.innerHTML = `Caracteres restantes: ${charLeft}`;
});

//
const nome = document.getElementById('data-name');
const email = document.getElementById('data-email');
const house = document.getElementById('data-house');
const family = document.getElementById('data-family');
const subjects = document.getElementById('data-content');
const evaluation = document.getElementById('data-eval');
const observacoes = document.getElementById('data-obs');

submitBtn.addEventListener('click', (event) => {
  const primeiroNome = document.getElementById('input-name');
  const segundoNome = document.getElementById('input-lastname');
  for (let index = 0; index < materias.length; index += 1) {
    if (materias[index].checked) {
      conteudosMarcados += `${materias[index].value}, `;
    }
  }
  evalForm.style.display = 'none';
  formData.style.display = 'block';
  nome.innerHTML = `Nome: ${primeiroNome.value} ${segundoNome.value}`;
  email.innerHTML = `Email: ${document.getElementById('input-email').value}`;
  house.innerHTML = `Casa: ${document.getElementById('house').value}`;
  family.innerHTML = `Família: ${evalForm.family.value}`;
  subjects.innerHTML = `Matérias: ${conteudosMarcados}`;
  evaluation.innerHTML = `Avaliação: ${evalForm.rate.value}`;
  observacoes.innerHTML = `Observações: ${document.getElementById('textarea').value}`;

  event.preventDefault();
});
