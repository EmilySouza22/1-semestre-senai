/*
3.9// Ops, o Juca lembrou agora que a Uber cobra dele 25% por corrida.
Altere o programa para efetuar esse desconto para que ele não acabe
contando com o ovo ainda na parte interna da galinha.
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
    ganhosDia = ganhosDia * (25/100)
    
    escreva("Ganhos do dia: R$" , ganhosDia)
  }
}
