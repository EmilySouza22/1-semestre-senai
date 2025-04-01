/*
3.8// Meu amigo Mano Juca está tentando complementar a renda e resolveu
fazer uns corre de Uber. Ele resolveu que vai fazer 5 corre por dia.
Crie um programa que leia o valor dos cinco corre e mostre a ele quanto
ganhou no dia.
*/
programa {
  funcao inicio() {
    real ganhosDia, corre1, corre2, corre3, corre4, corre5

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
    
    escreva("Ganhos do dia: R$" , ganhosDia)
  }
}
