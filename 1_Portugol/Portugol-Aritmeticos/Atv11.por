/*

Criar um programa que calcule o IMC, 
no qual o usuário deve digitar o seu peso e altura, realizar o cálculo 
e mostrar o resultado na tela.

*/

programa {
  funcao inicio() {
    
    real pesoUsuario
    real alturaUsuario
    real resultadoIMC

    escreva("Digite seu peso: ")
    leia(pesoUsuario)
    escreva("Digite sua altura: ")
    leia(alturaUsuario)

    resultadoIMC =  pesoUsuario / (alturaUsuario * alturaUsuario)

    escreva("Seu IMC será: " , resultadoIMC)
  }
}
