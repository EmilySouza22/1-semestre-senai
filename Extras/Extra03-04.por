/*

3.4// Crie um algoritmo que:
a) Leia um número inteiro;
b) Leia um segundo número inteiro;
c) Calcular o quadrado de cada um dos valores;
d) Apresentar a soma dos quadrados.

*/
programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    inteiro num1, num2, somaQuadrados

    escreva("Digite o primeiro número: ")
    leia(num1)
    escreva("Digite o segundo número: ")
    leia(num2)

    num1 = mat.potencia(num1, 2.0)
    num2 = mat.potencia(num2, 2.0)
    somaQuadrados = num1 + num2

    escreva("A soma dos quadrados é " + somaQuadrados)

  }
}