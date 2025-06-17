// 27. coloque a primeira letra de cada palavra em maiuscula

let palavras2 = ['teste', 'seila', 'qualquer', 'coisa']

let palavrasMaiusculo = palavras2.map((palavra)=> {
    let [primeira, ...restante] = palavra
    let novaletra = palavra[0].toUpperCase()
    return novaletra + restante.join('')
})
console.log(palavrasMaiusculo)

//28. Verifique se todos os elementos são números com .every().

let elementos = [3,"4",5,6,8];
let saonumeros = elementos.every(elemento => typeof elemento === 'number')
console.log(saonumeros);

//29. Verifique se ao menos um npumero é maior que 100 usando .some().
let elementos2 = [33,45,500,6,7,8]
let teste = elementos2.some(elemento => elemento > 100)
console.log(teste)

//30. "Achatamento": transforme um arrau com subarraus em um único array plano (um nível só)
let arraydearray = [34,21,[32,21,58],[2,4,7]]
let arrays = arraydearray.flat();
console.log(arrays);

// 32.Crie uma função que recebe um arrau de números e retorna a média

let notas = [5,6,7,8,10]
function calcularMedia(array){
    let soma = array.reduce((acumulador,atual)=> acumulador += atual ,0)
    return soma/array.length
}
console.log(calcularMedia(notas));