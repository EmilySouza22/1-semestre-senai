/* 10. Número Secreto
Gere um número aleatório entre 1 e 10 e salve no localStorage.
O usuário deve tentar adivinhar o número. Mesmo que ele
feche o navegador, o número continua sendo o mesmo até ele
acertar. */

if (!localStorage.getItem('numeroSecreto')) {
  let numero = Math.floor(Math.random() * 10) + 1;
  localStorage.setItem('numeroSecreto', numero);
}

function verificar() {

  let palpite = document.getElementById('palpite').value;
  let numeroSalvo = localStorage.getItem('numeroSecreto');
  let mensagem = document.getElementById('mensagem');
  
  palpite = Number(palpite);

  if (palpite < 1 || palpite > 10 || isNaN(palpite)) {
    mensagem.innerText = 'Digite um número entre 1 e 10.';
    return;
  }

  if (palpite === Number(numeroSalvo)) {
    mensagem.innerText = 'Você acertou! 🎉';
    localStorage.removeItem('numeroSecreto'); 
  } else {
    mensagem.innerText = 'Errou! Tente de novo.';
  }

}
