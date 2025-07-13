/* 6. Modo Noturno
Adicione um botão “Modo Escuro”. Quando ativado, o fundo e
os textos da página mudam, e essa escolha é salva para
manter o tema mesmo após recarregar a página. */

let modo = localStorage.getItem('modo');

if (modo === 'escuro') {
    document.body.classList.add('escuro');
}

function alternarModo() {
    document.body.classList.toggle('escuro');
    
    if (document.body.classList.contains('escuro')) {
        localStorage.setItem('modo', 'escuro');
    } else {
        localStorage.setItem('modo', 'claro');
    }

}
