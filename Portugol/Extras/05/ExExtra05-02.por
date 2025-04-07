/*
5.2// Mano Juca bateu a cabeça e está com problemas de
raciocínio...
Está analisando dois números há horas e não consegue
descobrir qual deles é o maior. Vamos ajuda-lo!
Crie um algoritmo que leia dois números A e B e imprima o
maior deles.
*/
programa {
  funcao inicio() {
    real numA, numB

    escreva("Digite dois números: ")
    leia(numA, numB)

    se(numA > numB){
      escreva(numA)
    } senao {
      escreva(numB)
    }
  }
}
