/*
Ex43.  Conversão de Temperatura (Celsius para Fahrenheit)
Solicite ao usuário que insira uma temperatura em Celsius.
Converta essa temperatura para Fahrenheit (F = C × 9/5 + 32).

Exiba o resultado em uma mensagem de alert .
*/

let temperaturaCelsius = Number(prompt("Digite o grau em Celsius!"));

let temperaturaFahrenheit = (temperaturaCelsius * (9/5)) + 32;

alert("A temperatura convertida será " + temperaturaFahrenheit + " graus Fahrenheit!")