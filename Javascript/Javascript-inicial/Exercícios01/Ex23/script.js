/*
23. O botão A faz pular, o botão B faz correr. Qual o usário digitou?
let botaoPressionado;

Exiba ações com if/else .
*/
let botaoPressionado = prompt("Digite o botão (A) ou (B): ");

if(botaoPressionado == 'A' || botaoPressionado == 'a'){
    console.log("O usuário pressionou o botão " + botaoPressionado);
}else if(botaoPressionado == 'B' || botaoPressionado == 'b'){
    console.log("O usuário pressionou o botão " + botaoPressionado);
}else{
    console.log("Botão inválido");
}