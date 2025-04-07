/*
Crie um programa que ajude um usuário a escolher roupas com base na temperatura atual. 
O usuário informa a temperatura e o programa sugere roupas apropriadas (casaco pesado, camiseta, short, etc).
*/
programa {
  funcao inicio() {
    inteiro temperaturaAtual

    escreva("Digite a temperatura de hoje! ")
    leia(temperaturaAtual)

    se(temperaturaAtual >= 21 e temperaturaAtual < 27){
      escreva("\nA temperatura está adequada! " , temperaturaAtual ,"°! \nSugiro blusa, calça leve, shorts, tênis e um casaco leve.")
    }
    se(temperaturaAtual < 10){
      escreva("\nAgora sim ta frio! " , temperaturaAtual ,"°! \nSugiro uma calça, tênis, meias, casaco pesado, luvas e cachecol")
    }
    se(temperaturaAtual > 28){
      escreva("\nNossa, muito calor! " , temperaturaAtual ,"°! Sugiro chinelo havaianas, short, óculos de sol e regata! Além de muito protetor solar :D")
    }
  }
}