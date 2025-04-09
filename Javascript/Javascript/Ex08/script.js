/*
8. Você é um astronauta tentando pousar no Planeta JavaScript. 
A nave só pousa se o combustível for maior que 50 
e o clima for "bom".

Desafio:
let combustivel;
let clima;

Exiba:
"Pouso autorizado!" ou
"Abortar missão!"
*/

let combustivel = prompt("Quanto de combustível a nave possui?");
let clima = prompt("Como está o clima? Bom ou ruim?");

if(combustivel > 50 && clima == 'bom'){
    console.log("Pouso autorizado!")
} else {
    console.log("Abortar missão!")
}
