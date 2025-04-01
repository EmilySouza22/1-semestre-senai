/*
Escreva um algoritmo para ler um valor e escrever na tela seu antecessor
*/
programa {
  funcao inicio() {
    inteiro num1, numAntecessor

    escreva("Digite um número aleatório: ")
    leia(num1)

    numAntecessor = num1 - 1

    escreva("O antecessor de " , num1 , " é " , numAntecessor)
  }
}
