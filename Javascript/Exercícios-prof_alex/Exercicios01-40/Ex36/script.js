/*
36. Se a cor1 for "azul" e a cor2 for "amarelo", mostre "verde". Se não mostre cor inválida

let cor1;
let cor2;

Exiba o resultado da mistura.
*/

let cor1 = prompt("Digite a primeira cor!")
let cor2 = prompt("Digite a segunda cor!")

if((cor1 == 'azul' && cor2 == 'amarelo')||(cor2 == 'azul' && cor1 == 'amarelo')){
    console.log("Misturando " + cor1 + ' + ' + cor2 + " o resultado foi verde!")
}else{
    console.log("A mistura não deu certo.")
}