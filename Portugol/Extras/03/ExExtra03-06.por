/*

3.6// Crie um algoritmo que leia um número e apresente a raiz quadrada e
o quadrado desse número.

*/
programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real num1, raiz, quadrado

    escreva("Digite um número qualquer: ")
    leia(num1)

    raiz = mat.raiz(num1, 2.0)
    quadrado = mat.potencia(num1, 2.0)

    escreva("Raíz quadrada: " + raiz)
    escreva("\nQuadrado: " + quadrado)
  }
}