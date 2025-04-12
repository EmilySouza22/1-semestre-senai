/*
35. Se a pontuação for entre 80 e 100, você ganha medalha de ouro.

let pontos;

Use operadores lógicos.
*/
let pontos = Number(prompt("Qual foi sua pontuação?"));

if((pontos >= 80) && (pontos <=100)){
    console.log("Parabéns, você ganhou a medalha de ouro!")
}else{
    console.log("Infelizmente você não ganhou a medalha de ouro")
}