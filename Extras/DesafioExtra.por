/*
Maçã
R$ 1,50
Laranja
R$ 2,00
Bergamota
R$ 1,00
Banana
R$ 1,20
Pera
R$ 0,50
*/
programa {
  funcao inicio() {
    real valorFinal, qtdMaca, qtdLaranja, qtdBergamota, qtdBanana, qtdPera

    escreva("Quantas unidades de maçã? ")
    leia(qtdMaca)
    escreva("Quantas unidades de Laranja? ")
    leia(qtdLaranja)
    escreva("Quantas unidades de Bergamota? ")
    leia(qtdBergamota)
    escreva("Quantas unidades de Banana? ")
    leia(qtdBanana)
    escreva("Quantas unidades de Pera? ")
    leia(qtdPera)
    
    valorFinal = (qtdMaca * 1.50) + (qtdLaranja * 2.00) + (qtdBergamota * 1.00) + (qtdBanana * 1.20) + (qtdPera * 0.50)

    escreva("\nRecibo da cliente:")
    se(qtdMaca > 0){
      escreva("\nForam pegas " , qtdMaca , " maçãs.")
    } 
    se(qtdLaranja > 0){
      escreva("\nForam pegas " , qtdLaranja , " laranjas.")
    } 
    se(qtdBergamota > 0){
      escreva("\nForam pegas " , qtdBergamota , " bergamotas.")
    } 
    se(qtdBanana > 0){
      escreva("\nForam pegas " , qtdBanana , " bananas.")
    } 
    se(qtdPera > 0){
      escreva("\nForam pegas " , qtdPera , " peras.")
    }

    escreva("\n O total a ser pago é R$: " , valorFinal)

  }
}
