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