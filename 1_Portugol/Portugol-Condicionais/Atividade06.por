/*
Escreva um programa que determine se um número é positivo, negativo ou zero.
*/
programa {
  funcao inicio() {
    inteiro numQualquer

    escreva("Digite algum número: ")
    leia(numQualquer)

    se(numQualquer > 0) {
      escreva("É positivo")
    }
    senao se(numQualquer < 0)
    {
      escreva("É negativo")
    }
    senao{
      escreva("É zero")
    }
  }
}
