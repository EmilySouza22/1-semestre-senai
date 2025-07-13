/* 4. Nome do Usuário
Ao acessar a página, pergunte o nome do usuário (via prompt
ou input). Salve esse nome e cumprimente o usuário nas
visitas seguintes: “Olá, [nome]!” */

let nome = localStorage.getItem('nome');

if (!nome) {
    nome = prompt('Qual é seu nome?');
    localStorage.setItem('nome', nome);
}

document.getElementById('saudacao').innerText = `Olá ${nome} !`;
