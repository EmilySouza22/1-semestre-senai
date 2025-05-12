/*
40. Se o jogador acertar a sequência correta, mostre "Você venceu a memória!"

let resposta;
let respostaCerta = "azul, verde, vermelho";

Compare as strings.
*/
let resposta = prompt("Escreva a sequência correta das cores...")
let respostaCerta = "azul, verde, vermelho";

if(resposta === respostaCerta){
    console.log("Você venceu a memória!")
}else{
    console.log("Você perdeu na memória!")
}