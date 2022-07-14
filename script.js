const buttonEntrar = document.getElementById('button-entrar');

buttonEntrar.addEventListener('click', (event) => {
  const inputEmail = document.getElementById('input-email').value;
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
