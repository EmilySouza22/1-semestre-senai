/*
Verificando Números Pares: Peça ao usuário para inserir um número 
e, em seguida, determine se é par ou ímpar.

*/
programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    inteiro numUsuario, numResto, numResultado

    escreva("Escreva um número: ")
    leia(numUsuario)
    
    numResultado = numUsuario / 2
    numResto = numUsuario - (numResultado * 2)

    se(numResto == 0){
      escreva(numUsuario , " é par.")
    } senao {
      escreva(numUsuario , " é ímpar.")
    }
  }
}