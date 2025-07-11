/* Lista de exercícios LocalStorage */

/* 1. Contador Persistente
Crie um contador com botões “+” e “−”. O número deve ser
salvo no localStorage e restaurado ao recarregar a página. */

function exercicio1(){
    const contadorElemento = document.getElementById('contador');
    const botaoMais = document.getElementById('mais');
    const botaoMenos = document.getElementById('menos');
    let chaveContador = 'valorContador';

    let contador = parseInt(localStorage.getItem(chaveContador)) || 0;
    contadorElemento.textContent = contador;

    function atualizarContador(valor) {
        contador += valor;
        contadorElemento.textContent = contador;
        localStorage.setItem(chaveContador, contador);
    }

    botaoMais.addEventListener('click', () => atualizarContador(1))
    botaoMenos.addEventListener('click', () => atualizarContador(-1))
}

/* 2. Texto Salvo
Crie um <textarea> onde o texto digitado seja salvo
automaticamente no localStorage a cada digitação. Ao
recarregar a página, o texto deve reaparecer.*/

/* 3. Checkbox Persistente
Faça uma lista de tarefas com checkboxes. Ao marcar uma
tarefa como feita, essa informação deve ser salva no
localStorage. */

/* 4. Nome do Usuário
Ao acessar a página, pergunte o nome do usuário (via prompt
ou input). Salve esse nome e cumprimente o usuário nas
visitas seguintes: “Olá, [nome]!” */

/* 5. Escolha de Cor
Crie três botões com cores diferentes. Quando o usuário clicar
em uma cor, o fundo da página muda e essa preferência é
salva no localStorage. */

/* 6. Modo Noturno
Adicione um botão “Modo Escuro”. Quando ativado, o fundo e
os textos da página mudam, e essa escolha é salva para
manter o tema mesmo após recarregar a página. */

/* 7. Visita Diária
Mostre uma mensagem como “Bem-vindo de volta!” caso a
última visita tenha sido no mesmo dia, e “Saudades de você!”
se foi em outro dia. Use localStorage para salvar a data. */

/* 8. Última Visita
Salve a data e hora da última visita do usuário e mostre-a ao
entrar novamente na página: “Última visita: 29/06/2025 22:30”. */

/* 9. Mensagem de Boas-vindas Personalizada
Crie um campo de texto onde o usuário digita uma mensagem
de boas-vindas. Essa mensagem deve ser exibida no topo da
página e salva no localStorage. */

/* 10. Número Secreto
Gere um número aleatório entre 1 e 10 e salve no localStorage.
O usuário deve tentar adivinhar o número. Mesmo que ele
feche o navegador, o número continua sendo o mesmo até ele
acertar. */