/*
Escreva um algoritmo para ler as dimensões de um triângulo (base e altura), calcular e escrever a área do triângulo.
*/
programa {
  funcao inicio() {
    real baseTriangulo, alturaTriangulo, areaTriangulo

    escreva("Digite quanto mede a base do triângulo: ")
    leia(baseTriangulo)
    escreva("Digite quanto mede a altura do triângulo: ")
    leia(alturaTriangulo)

    areaTriangulo = (baseTriangulo * alturaTriangulo)/2

    escreva("Área do triângulo: " , areaTriangulo)
  }
}
