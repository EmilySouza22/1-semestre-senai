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


//19. Ordene um array de strings em ordem alfabética.


//20. Ordene um array de números do maior para o menor.



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