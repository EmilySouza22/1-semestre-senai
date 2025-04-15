/*
14. Você só vai passear com seu cachorro se não estiver chovendo e se tiver tempo.

Desafio:
let estaChovendo;
let temTempo;

Exiba:
"Hora do passeio! 🐾" ou
"Hoje não vai dar... ☔"
*/

let estaChovendo = prompt("Hoje está chovendo?");
let temTempo = prompt("Você tem tempo para ir passear com o cachorro?");

if(((estaChovendo == 'não') || 
    (estaChovendo == 'nao') || 
    (estaChovendo == 'Não')) && 
    ((temTempo == 'sim') || 
    (temTempo == 'Sim'))
){
    console.log("Hora do passeio! 🐾");
}else{
    console.log("Hoje não vai dar... ☔");
}