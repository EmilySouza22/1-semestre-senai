/*
19. Se a criança for do ensino fundamental, precisa levar lápis. Se for do médio, leva
caneta. Se for outro, leva ambos!

Desafio:
let tipoEnsino = "fundamental";

Use if/else para mostrar o material adequado.
*/

let tipoEnsino = prompt("Qual é o ensino que você cursa? Responda: (fundamental), (médio) ou (outros)")

if(tipoEnsino == 'fundamental'){
    console.log("Precisa levar lápis!")
} else if(tipoEnsino == 'médio' || tipoEnsino == "medio"){
    console.log("Precisa levar caneta!")
}else{
    console.log("Precisa levar os dois materiais, lápis e caneta!")
}