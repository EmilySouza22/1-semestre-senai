/*
3.12// Crie um algoritmo que leia dois valores para as variáveis A e B e
efetue a troca dos valores de forma que a variável A passe a possuir o
valor da variável B e a variável B passe a possuir o valor da variável
A. Apresente os valores trocados.
*/
programa {
  funcao inicio() {
    inteiro valorA, valorB

    escreva("Digite o valor de A: ")
    leia(valorA)
    escreva("Digite o valor de B: ")
    leia(valorB)

    valorA = valorA + valorB
    valorB = valorA - valorB
    valorA = valorA - valorB

    escreva("==========================")
    escreva("\n Novo valor de A: " , valorA)
    escreva("\n Novo valor de B: " , valorB)
    escreva("\n==========================")
  }
}