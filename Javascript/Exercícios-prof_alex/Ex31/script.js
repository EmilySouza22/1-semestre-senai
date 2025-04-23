/*
31. Se o tempo do corredor for menor que 10 segundos, ele ganha.

let tempoCorrida;

Exiba:
"Você venceu! 🏁" ou
"Tente novamente."
*/
let tempoCorrida = prompt("Digite o tempo da sua corrida em segundos");

if(tempoCorrida < 10){
    console.log("Você venceu! 🏁");
}else{
    console.log("Tente novamente.");
}