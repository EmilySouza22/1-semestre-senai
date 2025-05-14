/*
Ex46 Calculadora de IMC
Solicite ao usuário que insira seu peso e altura.
Calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura²).

Exiba o resultado em um alert e classifique o IMC de acordo com os valores:
Menos de 18,5: Abaixo do peso
Entre 18,5 e 24,9: Peso normal
Entre 25 e 29,9: Sobrepeso
30 ou mais: Obesidade
*/
let pesoUsuario = Number(prompt("Insira seu peso."))
let alturaUsuario = Number(prompt("Insira sua altura."))

let usuarioIMC = pesoUsuario / (alturaUsuario ^ 2)

if(usuarioIMC < 18.5){
    alert("Abaixo do peso")
}else if(usuarioIMC >= 18.5 && usuarioIMC <= 24.9){
    alert("Peso normal")
}else if(usuarioIMC >= 25 && usuarioIMC <= 29.9){
    alert("Sobrepeso")
}else{
    alert("Obesidade")
}

