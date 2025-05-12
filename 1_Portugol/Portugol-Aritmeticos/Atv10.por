//Um(a) programador(a) deseja, ao final do mês, 
//saber quantas horas por semana em média estudou programação. 
//Crie um programa no qual seja digitado a quantidade de horas de cada semana do mês 
//e no final mostre a média de horas por semana naquele mês.

programa {
  funcao inicio() {
    
    real semana1
    real semana2
    real semana3
    real semana4
    real mediaHoras

    escreva("Digite quantas horas estudou na semana 1: ")
    leia(semana1)
    escreva("Digite quantas horas estudou na semana 2: ")
    leia(semana2)
    escreva("Digite quantas horas estudou na semana 3: ")
    leia(semana3)
    escreva("Digite quantas horas estudou na semana 4: ")
    leia(semana4)

    mediaHoras = (semana1 + semana2 + semana3 + semana4) / 4

    escreva("No total a média de horas estudadas por você foi de: \n")
    escreva(mediaHoras)


  }
}
