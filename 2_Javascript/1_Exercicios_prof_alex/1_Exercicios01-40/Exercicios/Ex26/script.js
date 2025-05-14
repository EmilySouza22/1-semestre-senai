/*
26. Se o mês e o dia forem os do seu aniversário, mostre uma mensagem especial.

let dia;
let mes;

Compare com seu aniversário fictício.
*/
let dia = Number(prompt("Qual é o dia de hoje?"));
let mes = Number(prompt("Qual é o mês atual?"));

//22 de setembro
if(dia == 22 && mes == 9){
    console.log("Hoje é o dia do meu aniversário!");
}else{
    console.log("Hoje não é meu aniversário...");
}