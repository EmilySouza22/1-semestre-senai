/*
Calculadora Simples: Crie uma calculadora simples que peça ao usuário dois números e uma operação 
(adição, subtração, multiplicação ou divisão) e, em seguida, exiba o resultado.
*/
programa {
  funcao inicio() {
    inteiro numA, numB
    cadeia realizarOperacao

    escreva("\nDigite o primeiro número: ")
    leia(numA)
    escreva("\nDigite o segundo número: ")
    leia(numB)

    escreva("\nQual operação você deseja realizar? Digite (+), (-), (/) ou (*): ")
    leia(realizarOperacao)
    
    se(realizarOperacao == '+'){
      inteiro resultado 
      resultado = numA + numB
      escreva("\nO resultado da operação será: " , resultado)
      escreva("\n==========================================")
      retorne inicio()
    }
    se(realizarOperacao == '-'){
      inteiro resultado 
      resultado = numA - numB
      escreva("\nO resultado da operação será: " , resultado)
      escreva("\n==========================================")
      retorne inicio()
    }
    se(realizarOperacao == '/'){
      inteiro resultado 
      resultado = numA / numB
      escreva("\nO resultado da operação será: " , resultado)
      escreva("\n==========================================")
      retorne inicio()
    }
    se(realizarOperacao == '*'){
      inteiro resultado 
      resultado = numA * numB
      escreva("\nO resultado da operação será: " , resultado)
      escreva("\n==========================================")
      retorne inicio()
    }
    se(realizarOperacao != '-' ou '+' ou '/' ou '*'){
      escreva("\nSímbolo de operação inválida!")
      escreva("\n=============================")
      retorne inicio()
    }
    
  }
}