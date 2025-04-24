/*
Ex44. Verificar se um número é par ou ímpar

Solicite ao usuário que insira um número.

Verifique se o número é par ou ímpar e exiba uma mensagem correspondente usando alert .

*/
let num1 = Number(prompt("Digite um número qualquer..."))

resto = num1 % 2

if(resto === 0){
    alert("Esse número é par.")
}else if(resto != 0){
    alert("Esse número é ímpar.")
}else{
    alert("Número inválido")
}