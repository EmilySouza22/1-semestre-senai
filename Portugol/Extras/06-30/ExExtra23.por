/*
Escreva um programa que determine se um número é par e maior que 10.
*/
programa {
  funcao inicio() {
    inteiro numA, numResultado, numResto

    escreva("Digite um número par: ")
    leia(numA)

    numResultado = numA / 2
    numResto = numA - (numResultado * 2)

    se(numResto == 0){
      se(numA > 10){
        escreva("O número " , numA , " é maior que 10.")
      } senao {
        escreva("O número " , numA , " não é maior que 10.")
      }
    } senao {
      escreva("Esse número não é par.")
    }
  }
}