/*
28. Se o interruptor estiver ligado, a luz acende. Senão, fica apagada. Pergunte ao
usuário se o interruptor está ligado ou desligado

let interruptor;

Exiba:
"Luz acesa 💡" ou
"Luz apagada."
*/

let interruptor = prompt("O interruptor está ligado?")

if(interruptor == 'sim'){
    console.log("Luz acesa!")
}else{
    console.log("Luz apagada!")
}