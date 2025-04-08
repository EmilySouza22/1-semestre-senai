/*
Desenvolva um programa que indique se um número é divisível por 3 e por 5 ao mesmo tempo.
*/
programa {
  funcao inicio() {
    inteiro numA, numResto3, numResultado3, numResto5, numResultado5

    escreva("Digite qualquer número: ")
    leia(numA)

    numResultado3 = numA / 3
    numResto3 = numA - (numResultado3 * 3)

    numResultado5 = numA / 5
    numResto5 = numA - (numResultado5 * 5)

    se(numResto3 == 0 e numResto5 == 0){
      escreva(numA , " é divisível pelo número 3 e por 5 ao mesmo tempo.")
    } senao {
      escreva(numA , " não é divisível por 3 e 5 ao mesmo tempo!")
    }
  }
}