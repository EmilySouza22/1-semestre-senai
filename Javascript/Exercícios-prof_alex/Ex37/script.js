/*
37. Se o tempo de entrega for menor que 2 dias, mostre "Entrega expressa".

let diasEntrega;
*/
let diasEntrega = Number(prompt("Qual o tempo de espera para a entrega em dias?"));

if(diasEntrega < 2){
    console.log("Entrega expressa");
} else {
    console.log("Entrega padrão");
}