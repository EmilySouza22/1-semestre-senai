/*
12. Para preparar uma poção, o bruxo precisa misturar exatamente dois ingredientes
certos.

Desafio:
let ingrediente1 = "pele de sapo";
let ingrediente2 = "asa de morcego";

Verifique se os ingredientes são exatamente esses. Se forem, diga "Poção
pronta!", senão "Mistura errada!"
*/

let ingrediente1 = prompt("Digite o primeiro ingrediente da poção!")
let ingrediente2 = prompt("Digite o segundo ingrediente da poção!")

if((ingrediente1 === 'pele de sapo'&& ingrediente2 === 'asa de morcego')|| 
(ingrediente2 === 'pele de sapo' && ingrediente1 === 'asa de morcego')){
    console.log("Poção pronta!")
} else {
    console.log("Mistura errada!")
}