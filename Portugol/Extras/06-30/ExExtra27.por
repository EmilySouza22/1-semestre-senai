/*
Crie um programa que determine se um número está no intervalo de 20 a 30, inclusive.
*/
programa {
  funcao inicio() {
    real numA 

    escreva("Digite um número aleatório: ")
    leia(numA)

    se(numA >= 21 e numA <= 29){
      escreva(numA , " está no intervalo de 20 a 30!")
    } senao {
      escreva(numA , " não está no intervalo de 20 a 30!")
    }
  }
}