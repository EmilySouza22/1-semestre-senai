/*
Escreva um programa que determine se um número é positivo, negativo ou zero.
*/
programa {
  funcao inicio() {
    real numA

    escreva("Digite um número: ")
    leia(numA)

    se(numA < 0){
      escreva("O número " , numA , " é negativo.")
    }
    
    se(numA == 0){
      escreva("O número " , numA , " é zero.")
    }

    se(numA > 0){
      escreva("O número " , numA , " é positivo.")
    }
  }
}