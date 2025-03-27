/*

Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 
cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. 

Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica 
e mostrar o total que receberá em reais.

*/

programa {
  funcao inicio() {
    
    inteiro valorFinal

    inteiro quantidadePlastico
    inteiro quantidadePapel
    inteiro quantidadeMetal

    inteiro valorPlastico
    inteiro valorPapel
    inteiro valorMetal

    escreva("Digite a quantidade de plástico: ")
    leia(quantidadePlastico)
    escreva("Digite a quantidade de papel: ")
    leia(quantidadePapel)
    escreva("Digite a quantidade de metal: ")
    leia(quantidadeMetal)

    /*

    cada 10kg de plástico rendem R$2,00 
    cada 30kg de papel rendem R$3,00
    cada 50kg de metal rendem R$5,00.

    10kg --- 2
    quantidadePlastico --- x

    */

    valorPlastico =(quantidadePlastico*2) / 10
    valorPapel =(quantidadePapel*3) / 30
    valorMetal =(quantidadeMetal*5) / 50

    valorFinal = valorPlastico + valorPapel + valorMetal 

    escreva("O usuário receberá " , valorFinal , " reais.")


  }
}
