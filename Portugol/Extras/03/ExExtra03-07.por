/*

3.7// Crie um algoritmo que leia dois números e calcule a média.

*/
programa {
  funcao inicio() {
    real num1, num2, media

    escreva("Digite um número: ")
    leia(num1)
    escreva("Digite outro número: ")
    leia(num2)

    media = (num1 + num2) / 2

    escreva("Média: " + media)
  }
}