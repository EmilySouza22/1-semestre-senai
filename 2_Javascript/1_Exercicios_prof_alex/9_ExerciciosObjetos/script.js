/* 💤 Lista de exercícios - Objetos */

// Primeira Parte

/* 1. Catálogo de Produtos
Crie um array com objetos representando produtos de uma loja. Implemente uma função que recebe um nome e retorna o produto correspondente. */
let produtos = [
    {
        id: 1 ,
        nome: 'Feijão',
        preco: 10.99 ,
        categoria: 'Não perecíveis'
    },
    {
        id: 2 ,
        nome: 'Refrigerante',
        preco: 6.99 ,
        categoria: 'Bebidas'
    },
    {
        id: 3 ,
        nome: 'Arroz',
        preco: 9.99 ,
        categoria: 'Não perecíveis'
    },
    {
        id: 4 ,
        nome: 'Queijo',
        preco: 8.99 ,
        categoria: 'Frios'
    },
    {
        id: 5 ,
        nome: 'Pizza Congelada',
        preco: 15.90 ,
        categoria: 'Congelados'
    },
];
function buscarProdutoPorNome(nome) {
    return produtos.find(produto => produto.nome.toLowerCase() === nome.toLowerCase())
}
console.log(buscarProdutoPorNome('Pizza Congelada'));

/* 2. Sistema de Biblioteca
Crie um objeto livro com título, autor e status de empréstimo. Implemente métodos emprestar() e devolver() que atualizam o status. */
const livro = {
    titulo: 'Amanhecer na colheita',
    autor: 'Suzanne Collins',
    statusDeEmprestimo: 'Disponível',

    emprestar(){
        if (this.statusDeEmprestimo === 'Disponível') {
            this.statusDeEmprestimo = 'Emprestado';
            console.log(`O livro "${this.titulo}" foi emprestado.`);
        } else {
            console.log(`O livro "${this.titulo}" já está emprestado.`);
        }
    },

    devolver(){
        if(this.statusDeEmprestimo === 'Emprestado'){
            this.statusDeEmprestimo = 'Disponível'
            console.log(`O livro "${this.titulo}" foi devolvido.`);
        }else{
            console.log(`O livro "${this.titulo}" está disponível.`);
        }
    }
}
livro.devolver();
livro.emprestar();
livro.emprestar();
livro.devolver();


/* 3. Conversor de Temperatura
Crie um objeto com métodos celsiusParaFahrenheit e fahrenheitParaCelsius, que retornem os valores convertidos. */
const conversorTemperatura = {
    celsiusParaFahrenheit(celsius) {
        return (celsius * 9/5)+ 32;
    },
    fahrenheitParaCelsius(fahrenheit) {
        return (fahrenheit - 32)* (5/9);
    },
};
console.log(conversorTemperatura.celsiusParaFahrenheit(66));
console.log(conversorTemperatura.fahrenheitParaCelsius(32));

/* 4. Agenda de Contatos
Crie um objeto agenda que contenha uma lista de contatos. Implemente funções para adicionar, remover e listar contatos. */


/* 5. Relatório de Notas
Crie um objeto aluno com notas em várias disciplinas. Implemente um método media() que retorna a média geral. */


/* 6. Carrinho de Compras
Implemente um objeto carrinho com um array de itens. Cada item tem nome, quantidade e valor. Crie métodos para adicionarItem , removerItem e total . */


/* 7. Filtrar Alunos Aprovados
Dado um array de objetos alunos , filtre apenas os que têm média acima de 6 e retorne seus nomes. */


/* 8. Conversor de Moedas com Objeto 
Crie um objeto moeda com taxas de conversão e um método converter(valor, de, para) que retorna o valor convertido. */
const moeda = {
    taxas: {
        USD: 1,     
        BRL: 5.20,  
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110.00 
    },

    converter(valor, de, para) {
        if (!this.taxas[de] || !this.taxas[para]) {
            return "Moeda inválida.";
        }

        const valorEmUSD = valor / this.taxas[de];
        const valorConvertido = valorEmUSD * this.taxas[para];

        return valorConvertido.toFixed(2);
    }
};

console.log(moeda.converter(100, "BRL", "USD"));
console.log(moeda.converter(50, "USD", "EUR"));
console.log(moeda.converter(1000, "JPY", "GBP"));



// Segunda Parte

/* 1. Banco com Múltiplas Contas
Crie um objeto banco com várias contas. Cada conta tem nome, saldo e métodos depositar , sacar . Implemente um relatório que mostre saldo total do banco */

/* 2. Sistema de Votação
Crie um objeto que armazene votos por candidato. Implemente funções para votar e retornar o candidato mais votado. */

/* 3. Agenda Semanal de Compromissos
Crie um objeto com os dias da semana como chaves e arrays de compromissos como valores. Implemente métodos para adicionar, remover e listar compromissos.*/

/* 4. Gerador de Fichas de RPG
Crie uma função que retorna objetos representando personagens com atributos aleatórios (força, destreza, vida). Permita criar múltiplos personagens e armazenar em um array. */

/* 5. Validador de Formulário com Objeto
Crie uma função que recebe um objeto com campos ( nome , email , idade ) e valida cada campo com regras diferentes, retornando um objeto com mensagens de erro ou sucesso.*/

/* 6. Sistema de Gestão de Projetos
Crie uma estrutura com objetos projeto , cada um contendo nome, status e uma lista de tarefas . Cada tarefa tem nome, data e status. Implemente métodos para alterar status e listar tarefas por status.*/

/* 7. Simulador de Jogo de Dados
Crie um objeto jogoDeDados com métodos para rolar dois dados, registrar histórico e contar quantas vezes saiu um número específico. */