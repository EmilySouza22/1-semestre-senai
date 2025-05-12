//Faça um programa onde o usuário deve digitar a temperatura em graus Celsius e mostrar na tela essa temperatura convertida em Fahrenheit.

programa {
  funcao inicio() {
    
    real temperaturaGC
    real temperaturaF

    escreva("Digite a temperatura (Graus Celsius): ")
    leia(temperaturaGC)

    temperaturaF = temperaturaGC * 1.8 + 32 

    escreva("A temperatura " , temperaturaGC)
    escreva(" Graus Celsius convertido será ")
    escreva(temperaturaF , " graus em Fahrenheit")

  }
}
