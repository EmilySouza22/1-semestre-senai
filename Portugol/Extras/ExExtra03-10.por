/*
3.10// Considerando:
- que os rendimentos do Juca sejam muito parecidos de um dia para o
outro;
- que o Juca pretende fazer os corre em apenas 20 dias do mês.
Altere o programa novamente para dar ao pobre Juca uma estimativa do
“salário” que ele vai ganhar da Uber no final do mês.
*/
programa {
  funcao inicio() {
    real ganhosDia, corre1, corre2, corre3, corre4, corre5, estimativaSalario, taxaUber

    escreva("Valor da primeira corrida: ")
    leia(corre1)
    escreva("Valor da segunda corrida: ")
    leia(corre2)
    escreva("Valor da terceira corrida: ")
    leia(corre3)
    escreva("Valor da quarta corrida: ")
    leia(corre4)
    escreva("Valor da quinta corrida: ")
    leia(corre5)

    ganhosDia = corre1 + corre2 + corre3 + corre4 + corre5
    taxaUber = ganhosDia * (25/100)
    ganhosDia = ganhosDia - taxaUber
    estimativaSalario = ganhosDia * 20

    escreva("===========================================")
    escreva("\nGanhos do dia: R$" , ganhosDia)
    escreva("\nEstimativa mensal de salário:R$" , estimativaSalario)
    escreva("\n=========================================")

  }
}