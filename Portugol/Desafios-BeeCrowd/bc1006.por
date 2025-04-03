programa {
  funcao inicio() {
    real notaA, notaB, notaC, mediaTotal

    escreva("Digite a primeira nota: ")
    leia(notaA)
    escreva("Digite a segunda nota: ")
    leia(notaB)
    escreva("Digite a segunda nota: ")
    leia(notaC)

    mediaTotal = (notaA * 2 + notaB * 3 + notaC * 5) / (2+3+5)

    escreva("A média vai ser " + mediaTotal)
  }
}
