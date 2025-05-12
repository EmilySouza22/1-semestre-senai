/*
Ex45 - Calcular a média de três notas
Peça ao usuário para inserir três notas de um aluno.

Calcule a média das notas e exiba o resultado em um alert .
*/

let nota1 = Number(prompt("Digite sua primeira nota"));
let nota2 = Number(prompt("Digite sua segunda nota"));
let nota3 = Number(prompt("Digite sua terceira nota"));

let media = (nota1 + nota2 + nota3) / 3
media = media.toFixed(2) 

alert("A média das notas será: " + media)