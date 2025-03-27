/*

 Uma pousada cobra R$280 reais a diária por quarto e R$15 reais o café por pessoa por dia. 
 Você pretende passar um tempo com alguns amigos nessa pousada, sendo que todos ficarão no mesmo quarto. 
 Informar a quantidade de pessoas, o número de diárias e quantas pessoas do grupo vão querer café diário. 
 Mostrar na tela o total a pagar.

*/

programa {
  funcao inicio() {
    
    inteiro pessoasQuantidade
    inteiro diariaQuantidade
    inteiro cafeQuantidade

    inteiro precoDiariaPorQuarto = 280
    inteiro precoCafePorDia = 15

    inteiro valorFinalCafe
    inteiro valorFinalDiaria
    inteiro valorFinal

    escreva("Digite a quantidade de pessoas: ")
    leia(pessoasQuantidade)

    escreva("Digite a quantidade de diárias: ")
    leia(diariaQuantidade)

    escreva("Digite o total de cafés que serão necessários para seu grupo: ")
    leia(cafeQuantidade) 

    valorFinalDiaria = (precoDiariaPorQuarto * diariaQuantidade)

    valorFinalCafe = (precoCafePorDia * cafeQuantidade)

    valorFinal = valorFinalCafe + valorFinalDiaria

    escreva(" O total a ser pago será de " , valorFinal , " reais. \n")
    escreva(" Sendo " , valorFinalDiaria , " reais da diaria ")
    escreva(" e " , valorFinalCafe , " reais do café.")


  }
}
