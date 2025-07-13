/* 8. Última Visita
Salve a data e hora da última visita do usuário e mostre-a ao
entrar novamente na página: “Última visita: 29/06/2025 22:30”. */

let ultimaVisita = localStorage.getItem('ultimaVisita');

if (ultimaVisita) {
    document.getElementById('info').innerText = 'Última visita: ' + ultimaVisita;
} else{
    document.getElementById('info').innerText = 'Bem-vindo!';
}

let agora = new Date();
let formatado = agora.toLocaleDateString() + ' ' + agora.toLocaleTimeString();
localStorage.setItem('ultimaVisita', formatado);
