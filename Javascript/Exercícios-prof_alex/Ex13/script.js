/*
13. Só entra na festa VIP quem estiver na lista de convidados e trouxer convite.

Desafio:
let nome = "Joana";
let temConvite = true;

Use if/else para dizer se pode entrar ou não.
*/

let nome = prompt("Qual seu nome?")
let temConvite = prompt("Você tem convite? (1)sim ou (0)não")

if(nome == 'Joana' && temConvite == true){
    console.log("Pode entrar! Aproveite!")
} else {
    console.log("Não pode entrar!") 
}