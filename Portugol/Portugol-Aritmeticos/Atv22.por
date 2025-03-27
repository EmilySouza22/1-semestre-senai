/*

Você é um amante da natureza e adora fazer trilhas. 

Criar um programa que calcule a velocidade média das trilhas que você realiza. 
Para isso, devem ser digitados os dados de distância percorrida (quilômetros) e tempo que a trilha durou (horas). 
Fazer então o cálculo da velocidade média e mostrar na tela a mensagem "Sua média de velocidade durante essa trilha foi de X km/h", sendo X a velocidade.

*/

programa {
  funcao inicio() {
    
    inteiro distanciaPercorridaKM
    inteiro trilhaDuracaoHoras
    
    inteiro mediaVelocidade

    escreva("Digite a distância percorrida (Km): ")
    leia(distanciaPercorridaKM)

    escreva("Digite a duração da trilha (Horas): ")
    leia(trilhaDuracaoHoras)

    mediaVelocidade = (distanciaPercorridaKM / trilhaDuracaoHoras)

    escreva("Sua média de velocidade durante essa trilha foi de " , mediaVelocidade , " km/h.")

  }
}
