/*

3.2// Crie um algoritmo que calcule a área de um triângulo, considerando
a fórmula “AREA = (base * altura)/2”.
Utilize as variáveis AREA, BASE e ALTURA e os operadores aritméticos
necessários.

*/

programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real areaTriangulo, baseTriangulo, alturaTriangulo

    escreva("Digite o valor da base do triângulo: ")
    leia(baseTriangulo)
    escreva("Digite o valor da altura do triângulo: ")
    leia(alturaTriangulo)

    areaTriangulo = (baseTriangulo * alturaTriangulo)/2
    escreva("A área do triângulo é de " , areaTriangulo , " metros quadrados.")

  }
}