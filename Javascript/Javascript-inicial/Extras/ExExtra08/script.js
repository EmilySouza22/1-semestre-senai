/*
8. Faça um programa para converter um certo valor em reais para dólares (ver cotação do
dia).
*/

let valorReal = Number(prompt("Digite o valor em reais que deseja converter: "));

let valorDolar = valorReal * 5.10;
valorDolar = valorDolar.toFixed(2)
console.log("R$" + valorReal + " CONVERTIDO PARA DÓLAR: $" + valorDolar);