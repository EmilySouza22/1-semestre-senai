/*
3. João quer pedir pizza, mas só se:
Ele tiver dinheiro e estiver com fome.
Ou se for sexta-feira (porque é tradição!).

Exiba:
"Vamos pedir pizza!" ou
"Hoje não é dia de pizza."
*/

let fatorDinheiro = prompt("João tem dinheiro?")
let fatorFome = prompt("Você está com fome, João?")
let fatorSextaFeira = prompt("Hoje é sexta-feira?")

if(fatorDinheiro == 'sim' && fatorFome == 'sim' || fatorSextaFeira == 'sim'){
    console.log("Vamos pedir pizza!")
} else {
    console.log("Hoje não é dia de pizza.")
}