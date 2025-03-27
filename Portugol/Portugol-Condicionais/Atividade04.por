/*

4) Desenvolver um programa que receba um número inteiro e verifique se ele é múltiplo de 3.
Se sim, mostrar “É múltiplo de 3!”

*/
programa {
  funcao inicio() {
    inteiro numeroInteiro
    inteiro numeroDivisor = 3
    inteiro operacaoMultiplo
    
    escreva("Vamos identificar se um número é múltiplo de 3.\n")
    escreva("Digite um número: ")
    leia(numeroInteiro)

    operacaoMultiplo = numeroInteiro % numeroDivisor

    se(operacaoMultiplo == 0){
      escreva("É múltiplo de 3!")
    }
  }
}
