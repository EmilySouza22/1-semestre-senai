programa {
  funcao inicio() {
    real nota1, nota2, mediaTotal

    escreva("Digite a primeira nota: ")
    leia(nota1)
    escreva("Digite a segunda nota: ")
    leia(nota2)

    mediaTotal = (nota1 * 3.5 + nota2 * 7.5) / (3.5 + 7.5)

    escreva("A média vai ser " + mediaTotal)
    
  }
}
