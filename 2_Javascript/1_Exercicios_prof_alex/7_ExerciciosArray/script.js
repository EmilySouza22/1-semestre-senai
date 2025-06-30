/**
* 
*    - Métodos básicos
*    push()
*    pop()
*    shift()
*    unshift()
*
*    - Métodos intermediários
*    forEach()
*    map()
*    filter()
*    find()
*    reduce()
*    concat()
*    spread [...]
*    indexOf()
*    every()
*    join()
*    splice()
*
*/


//11. Crie um array com 5 nomes e mostre apenas os que têm mais de 4 letras.
const alunos = ['ana', 'gabriela', 'mary', 'emily'];
const filtroNome = alunos.filter(nomesMaioresQue4Letras);
function nomesMaioresQue4Letras(nomeAluno){
    return nomeAluno.length > 4;
}
console.log('Exercício 11:', filtroNome)

//12. Dobre cada número de um array usando .map()
const numeros = [1,2,3,4,100];
const numerosDobro = numeros.map(numero => numero * 2);
console.log('Exercício 12:', numerosDobro);

//13. Filtre os números pares de um array com .filter().
const numbers = [1,2,3,5,7,12,14,15,17,33,34,56,89,90];
const filterOdd = numbers.filter(numbersOdd);
function numbersOdd(numbersodd){
    return numbersodd % 2 === 0;
}
console.log('Exercício 13:', filterOdd)

//14. Some todos os números do array com .reduce().
const numerosSomados = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
});
console.log('Exercício 14:', numerosSomados)

//15. Encontre o maior número de um array.
let maior = numeros[0]
const maiorNumero = numeros.forEach(numero => {
    if(numero > maior){
        maior = numero
    }
    return maior
});
console.log('Exercício 15:', maior)

//16. Encontre o menor número de um array.
let menor = numeros[0]
const menorNumero = numeros.forEach(numero => {
    if(numero < menor){
        menor = numero
    }
    return menor;
});
console.log('Exercício 16:', menor)

//17. Inverta os elementos de um array sem usar .reverse().
let numerosArrayInvertido = numeros.reduce((acumulador , valorAtual) => {
    return [valorAtual, ...acumulador];
}, []);
console.log('Exercício 17:', numerosArrayInvertido);

//18. Junte dois arrays em um só usando .concat() ou spread [...].
let frase1 = ['Continue seguindo seu caminho'];
let frase2 = ['apesar dos obstáculos'];
const fraseCompleta = frase1.concat(frase2);
console.log('Exercício 18:', fraseCompleta);

//19. Ordene um array de strings em ordem alfabética.
let times = ['atletico', 'fluminense', 'flamengo', 'criciuma', 'botafogo'];
const timesOrdemAlfabetica = times.sort();
console.log('Exercício 19:', timesOrdemAlfabetica);

//20. Ordene um array de números do maior para o menor.
let centenas = [300, 100, 500, 700, 800, 900, 200, 600, 400];
const centenasEmOrdem = centenas.sort((a,b) => a - b);
console.log('Exercício 20:', centenasEmOrdem);

//21. Remova valores duplicados de um array.
const arrayComDuplicados = [1, 2, 2, 3, 4, 4, 5, 7, 7];
const arraySemDuplicados = [...new Set(arrayComDuplicados)];
// arraySemDuplicados será [1, 2, 3, 4, 5]
console.log('Exercício 21:', arraySemDuplicados)

//22. Conte quantas vezes um valor aparece em um array.
const numDuplicados = [1,2,3,3,3,3,4,5];
const numeroRepetido = 3
let resultado = numDuplicados.filter((numero) => numero === numeroRepetido);
console.log('Exercício 22: Número repetido:', numeroRepetido , ', quantidade:', resultado.length)

//23. Transforme todos os itens do array em uma única string separada por vírgulas com .join().

//24. Substitua todas as ocorrências de "banana" por "maçã" em um array

//25. Encontre o índice de um valor específico com .indexOf().

//26. Crie um novo array contendo apenas as strings de um array com tipos mistos.

//27. Coloque a primeira letra de cada palavra em maiúscula.

//28. Verifique se todos os elementos são números com .every().

//29. Verifique se ao menos um número é maior que 100 usando .some().

//30. "Achatamento": transforme um array com subarrays em um único array plano (um nível só).


/*

31. A partir de uma lista de idades, retorne apenas os adultos (idade ≥ 18).
32. Crie uma função que recebe um array de números e retorna a média.
33. Faça uma função que recebe um array e o devolve na ordem inversa (sem
usar .reverse()).
34. Rotacione os elementos de um array uma posição para a direita.
35. Remova todos os valores falsos do array (false, 0, "", null, undefined, NaN).
36. Agrupe os itens de um array por tipo (typeof).
37. Conte as vogais em cada string de um array.
38. Gere um array com os 10 primeiros números pares.
39. Gere um array com os quadrados dos números de 1 a 10.
40. Compare dois arrays e retorne os elementos que existem em ambos.

*/


/*
 
41. Faça um array de objetos com nome e nota, e filtre os aprovados (nota ≥ 7).
42. Crie uma função que embaralha os elementos de um array.
43. Verifique se um array está em ordem crescente.
44. Conte quantas strings têm mais de 5 letras em um array.
45. Inverta as palavras de cada string de um array.
46. Crie um array com os dias da semana e exiba apenas os do fim de semana.
47. Separe os números negativos e positivos de um array.
48. Crie uma função que retorna o segundo maior número de um array.
49. Conte quantas vezes cada letra aparece em um array de strings.
50. Transforme um array de strings em um array de objetos com { valor: string,
tamanho: número de caracteres }.

*/

// 27. Coloque a primeira letra de cada palavra em maiuscula
let palavras2 = ['teste', 'seila', 'qualquer', 'coisa']
let palavrasMaiusculo = palavras2.map((palavra)=> {
    let [primeira, ...restante] = palavra
    let novaletra = palavra[0].toUpperCase()
    return novaletra + restante.join('')
})
console.log('Exercício 27:', palavrasMaiusculo)

//28. Verifique se todos os elementos são números com .every().
let elementos = [3,"4",5,6,8];
let saonumeros = elementos.every(elemento => typeof elemento === 'number')
console.log('Exercício 28:', saonumeros);

//29. Verifique se ao menos um npumero é maior que 100 usando .some().
let elementos2 = [33,45,500,6,7,8]
let teste = elementos2.some(elemento => elemento > 100)
console.log('Exercício 29:', teste)

//30. "Achatamento": transforme um arrau com subarraus em um único array plano (um nível só)
let arraydearray = [34,21,[32,21,58],[2,4,7]]
let arrays = arraydearray.flat();
console.log('Exercício 30:', arrays);

// 32.Crie uma função que recebe um array de números e retorna a média
let notas = [5,6,7,8,10]
function calcularMedia(array){
    let soma = array.reduce((acumulador,atual)=> acumulador += atual ,0)
    return soma/array.length
}
console.log('Exercício 32:', calcularMedia(notas));