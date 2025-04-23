/*
29. Você só consegue derrotar um vampiro se estiver com alho
ou cruz.

let temAlho;
let temCruz;

Resultado:
"Você venceu o vampiro!" ou
"Você corre perigo!"

*/
let temAlho = prompt("Tem alho?");
let temCruz = prompt("Tem Cruz?");

if(temAlho == 'sim' && temCruz == 'sim'){
    console.log("Você venceu o vampiro!");
}else{
    console.log("Você corre perigo!");
}