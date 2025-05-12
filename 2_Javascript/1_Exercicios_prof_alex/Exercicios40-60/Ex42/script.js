/*
Ex42. Calculadora de Soma

Peça ao usuário para inserir dois números (você pode usar prompt para
pegar os valores como strings e depois convertê-los para números com
Number).

Mostre o resultado da soma desses dois números usando alert .
*/

let num1 = Number(prompt("Digite o primeiro numero!"))
let num2 = Number(prompt("Digite o segundo numero!"))

let soma = num1 + num2 
alert("O resultado da soma " + num1  + " + " + num2 +" será " + soma)