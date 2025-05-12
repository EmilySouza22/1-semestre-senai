/*
25. Um robô-sabonete libera espuma apenas se for usado com água
e sabão.

let temAgua;
let temSabao;

Exiba:
"Espuma ativada! 🫧" ou
"Nada acontece."
*/

let temAgua = prompt("Tem água?")
let temSabao = prompt("Tem sabão?")
 
if(temAgua == 'sim' && temSabao == 'sim'){
    console.log("Espuma ativada! 🫧")
} else {
    console.log("Nada acontece.")
}