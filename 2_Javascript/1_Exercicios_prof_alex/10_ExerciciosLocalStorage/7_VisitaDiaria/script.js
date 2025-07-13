/* 7. Visita Diária
Mostre uma mensagem como “Bem-vindo de volta!” caso a
última visita tenha sido no mesmo dia, e “Saudades de você!”
se foi em outro dia. Use localStorage para salvar a data. */

let hoje = new Date().toLocaleDateString();
let ultima = localStorage.getItem('dataVisita');

if (ultima === hoje) {
    document.getElementById('mensagem').innerText = 'Bem vindo de volta!';
} else {
    document.getElementById('mensagem').innerText = 'Saudades!';
}

localStorage.setItem('dataVisita', hoje);
