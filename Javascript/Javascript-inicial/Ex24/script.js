/*
24. A pessoa só vai à praia se for final de semana e o tempo estiver ensolarado.
let ehFinalDeSemana;
let tempo;

Exiba:
"Bora pra praia!" ou
"Melhor ficar em casa."
*/

let ehFinalDeSemana = prompt("Hoje é final de semana?");
let tempo = prompt("O tempo está ensolarado?");

if(ehFinalDeSemana == 'sim' && tempo == 'sim'){
    console.log("Bora pra praia!")
}else{
    console.log("Melhor ficar em casa.")
}