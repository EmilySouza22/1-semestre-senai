/* 5. Escolha de Cor
Crie três botões com cores diferentes. Quando o usuário clicar
em uma cor, o fundo da página muda e essa preferência é
salva no localStorage. */

let cor = localStorage.getItem('corFundo');

if (cor) {
    document.body.style.background = cor;
}

function mudarCor(corEscolhida) {
    document.body.style.background = corEscolhida;
    localStorage.setItem('corFundo', corEscolhida);
}
