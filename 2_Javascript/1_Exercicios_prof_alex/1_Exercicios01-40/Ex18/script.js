/*
18. A pista de esqui está liberada apenas para maiores de 16 anos e que tenham
equipamento completo.

Desafio:
let idade;
let temEquipamento;

Exiba:
"Pode esquiar 🎿" ou
"Não liberado."
*/

let idade = prompt("Qual é a sua idade?")
let temEquipamento = prompt("Você está com o equipamento completo adequado para esquiar? \nResponda com (sim) ou (não):")

if(idade > 16 && temEquipamento == 'sim'){
    console.log("Pode esquiar 🎿")
} else {
    console.log("Não liberado.")
}
