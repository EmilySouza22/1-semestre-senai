/* 9. Mensagem de Boas-vindas Personalizada
Crie um campo de texto onde o usuário digita uma mensagem
de boas-vindas. Essa mensagem deve ser exibida no topo da
página e salva no localStorage. */

let mensagemSalva = localStorage.getItem('boasVindas');

if (mensagemSalva) {
    document.getElementById('mensagem-topo').innerText = mensagemSalva;
}

function salvarMensagem() {
    let texto = document.getElementById('entrada').value;
    document.getElementById('mensagem-topo').innerText = texto;
    localStorage.setItem('boasVindas', texto);
}
