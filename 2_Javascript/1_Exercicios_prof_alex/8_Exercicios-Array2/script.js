/* 📘 Lista de Exercícios – Operações com Arrays */

/* Arrays de entrada: */
const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const produtos = [
 { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
 { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
 { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
 { nome: "Meias", preco: 9.9, categoria: "Roupas" },
 { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];



/* 💡 Exercícios com numeros */
console.log(`=======================`)
console.log(`Exercícios com números:`)
console.log(`=======================`)

//1. Filtrar números maiores que 10.
const numerosFiltrados = numeros.filter(numero => numero > 10);
console.log(`Exercício 1: ${numerosFiltrados}`);

//2. Dobrar todos os números do array
const numerosDobrados = numeros.map(numero => numero * 2);
console.log(`Exercício 2: ${numerosDobrados}`);

//3. Somar todos os números do array.
const somaNumeros = numeros.reduce((a , b) => a + b);
console.log(`Exercício 3: ${somaNumeros}`);

//4. Encontrar o maior número
const maior = numeros.reduce((maiorAtual, numero) => {
    return numero > maiorAtual ? numero : maiorAtual
}, numeros[0]);
console.log(`Exercício 4: ${maior}`);

//5. Encontrar o menor número
const menor = numeros.reduce((menorAtual , numero) => {
    return numero < menorAtual ? numero : menorAtual
}, numeros[0])
console.log(`Exercício 5: ${menor}`);

//6. Ordenar os números em ordem crescente
const numerosOrdemCrescente = numeros.sort((a,b) => a - b);
console.log(`Exercício 6: ${numerosOrdemCrescente}`);

//7. Criar um novo array com apenas os números ímpares
const numerosImpares = numeros.filter(numero => numero % 2 != 0);
console.log(`Exercício 7: ${numerosImpares}`);

//8. Verificar se todos os números são maiores que 3
let maiorQue3 = true;
const verificacao = numeros.map(numero => {
    if(numero <= 3){
        maiorQue3 = false;
    }
});
console.log(`Exercício 8: TODOS os números são maiores que 3? Resposta: ${maiorQue3}`);

//9. Verificar se existe algum número maior que 100.
let numeroMaior = false;
const verificacao2 = numeros.find(numero => numero > 100 ? numeroMaior = true : numeroMaior = false);
console.log(`Exercício 9: Há algum número maior que 100? Resposta: ${numeroMaior}`);

//10. Retornar a média dos números.
const media = numeros.reduce((soma, numero) => soma + numero, 0) / numeros.length;
console.log(`Exercício 10: ${media.toFixed(2)}`);



/* 💡 Exercícios com nomes */
console.log(`=======================`)
console.log(`Exercícios com nomes:`)
console.log(`=======================`)

//1. Ordenar os nomes em ordem alfabética.
const nomesOrdemAlfabetica = nomes.sort();
console.log(`Exercício 1: ${nomesOrdemAlfabetica}`);

//2. Filtrar os nomes com mais de 5 letras.
const nomesMaioresQue5 = nomes.filter(nome => nome.length > 5);
console.log(`Exercício 2: ${nomesMaioresQue5}`);

//3. Transformar todos os nomes em letras minúsculas.
const nomesLetrasMinusculas = nomes.map(nome => {
    let [primeira, ...restante] = nome;
    let letraMinuscula = nome[0].toLowerCase();
    return letraMinuscula + restante.join(''); 
});
console.log(`Exercício 3: ${nomesLetrasMinusculas}`);

//4. Verificar se algum nome começa com a letra “B”.
const nomesComB = nomes.filter(nome => {
    let [primeira, ...restante] = nome;
    if(nome[0] === 'B'){
        return primeira + restante.join(''); 
    }
});
console.log(`Exercício 4: ${nomesComB}`);

//5. Encontrar o nome “Daniel” no array.
const encontrarNome = nomes.find(nome => nome === 'Daniel');
console.log(`Exercício 5: ${encontrarNome}`);

//6. Criar um array com a quantidade de letras de cada nome.
const quantidadeLetras = nomes.map(nome => nome = nome.length);
console.log(`Exercício 6: ${quantidadeLetras}`);

//7. Juntar todos os nomes em uma string separada por vírgula.
const juntarNomes = nomes.join(', ');
console.log(`Exercício 7: ${juntarNomes}`);



/* Exercícios com produtos */
console.log(`=======================`)
console.log(`Exercícios com produtos:`)
console.log(`=======================`)

//1. Filtrar os produtos da categoria “Eletrônicos”.
const categoriaEletronicos = produtos.filter(produto => produto.categoria === 'Eletrônicos');
console.log('Exercício 1:' , categoriaEletronicos);

//2. Criar um array apenas com os nomes dos produtos.
const nomesProdutos = produtos.map(produto => produto.nome);
console.log('Exercício 2:' , nomesProdutos);

//3. Criar um array com os preços com desconto de 10%.
const precosComDesconto = produtos.map(produto => {
    let precoComDesconto = produto.preco * 0.9;
    return {
        nome: produto.nome,
        precoOriginal: produto.preco,
        precoComDesconto: Math.round(precoComDesconto * 100) / 100 
    };
});
console.log('Exercício 3:' , precosComDesconto);

//4. Calcular o valor total de todos os produtos.
const produtosValorTotal = produtos.reduce((soma , produto) => soma + produto.preco, 0);
console.log('Exercício 4:' , produtosValorTotal.toFixed(2));

//5. Encontrar o produto mais caro.
let maisCaro = produtos[0].preco
const produtoMaisCaro = produtos.forEach(produto => {
    if(produto.preco > maisCaro){
        maisCaro = produto.preco
    }
    return maisCaro
});
console.log('Exercício 5:' , maisCaro);

//6. Ordenar os produtos do mais barato ao mais caro.
const produtosOrdenados = produtos.sort((a, b) => a.preco - b.preco);
console.log('Exercício 6:' , produtosOrdenados);

//7. Agrupar os produtos por categoria (bônus - mais avançado)
const produtosPorCategorias = produtos.reduce((agrupado, produto) => {
    const categoria = produto.categoria;
    if (!agrupado[categoria]) {
        agrupado[categoria] = [];
    }
    agrupado[categoria].push(produto);
    return agrupado;
}, {});
console.log('Exercício 7:' , produtosPorCategorias);

//8. Criar uma função que receba uma categoria e retorne os produtos dela
function produtosPorCategoria(categoria) {
    return produtos.filter(produto => produto.categoria === categoria);
}
console.log('Exercício 8:' , produtosPorCategoria('Eletrônicos'));
console.log('Exercício 8:' , produtosPorCategoria('Roupas'));
console.log('Exercício 8:' , produtosPorCategoria('Comidas'));

//9. Criar um array com objetos apenas contendo nome e preço
const nomePreco = produtos.map(produto => ({
    nome: produto.nome,
    preco: produto.preco
}));
console.log('Exercício 9:' , nomePreco);

//10. Verificar se todos os produtos custam mais de R$ 5
const acimaDe5 = produtos.every(produto => produto.preco > 5);
console.log('Exercício 10:' , acimaDe5);



/* 🎯 Bônus (Desafios com Lógica) */

//1. Dado o array numeros , crie um array apenas com os quadrados dos números pares.
const quadradosPares = numeros
    .filter(n => n % 2 === 0)
    .map(n => n ** 2);
console.log('Exercício 1:' , quadradosPares);

//2. A partir de nomes , retorne o nome com maior quantidade de letras.
const nomeMaisLongo = nomes.reduce((maior, atual) =>
    atual.length > maior.length ? atual : maior
);
console.log('Exercício 2:' , nomeMaisLongo);

//3. Verifique se todos os nomes terminam com uma vogal.
const vogais = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
const todosTerminamComVogal = nomes.every(nome => {
    const ultimaLetra = nome.slice(-1).toLowerCase();
    return vogais.includes(ultimaLetra);
});
console.log('Exercício 3:' , todosTerminamComVogal);

//4. Junte os arrays numeros e nomes em um único array.
const nomesNumeros = numeros.concat(nomes);
console.log('Exercício 4:' , nomesNumeros);

//5. Crie um array com os nomes dos produtos que custam menos de R$100 e pertencem a “Roupas”.
const roupasBaratas = produtos
    .filter(p => p.preco < 100 && p.categoria === "Roupas")
    .map(p => p.nome);

console.log('Exercício 5:' , roupasBaratas);

//6. Crie uma função que calcule o valor médio dos produtos da categoria “Eletrônicos”.
function mediaEletronicos(produtos) {
    const eletronicos = produtos.filter(p => p.categoria === "Eletrônicos");
    if (eletronicos.length === 0) return 0;
    const total = eletronicos.reduce((soma, p) => soma + p.preco, 0);
    const media = total / eletronicos.length;
    return Math.round(media * 100) / 100;
}
console.log('Exercício 6:' , mediaEletronicos(produtos)); 