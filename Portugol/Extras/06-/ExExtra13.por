/*
Desenvolva um sistema de reserva de quartos de hotel, onde o usuário escolhe o tipo de quarto 
(simples, duplo, suíte) e o programa verifica a disponibilidade e o preço.
*/
programa {
  inclua biblioteca Util --> u
  funcao inicio() {
    inteiro quartoHotel, verificaQuartoDisponivel

    escreva("Digite o tipo de quarto: (1)Simples (2)Duplo (3)Suíte: ")
    leia(quartoHotel)

    verificaQuartoDisponivel = u.sorteia(0, 1)
    se(verificaQuartoDisponivel == falso){
      escreva("Que pena! Não temos disponibilidade para esse quarto no momento!")
    }
    se(quartoHotel == 1 e verificaQuartoDisponivel == verdadeiro){
      real quartoSimples = 50
      escreva("\nValor da diária do quarto simples: R$" , quartoSimples)
    }
    se(quartoHotel == 2 e verificaQuartoDisponivel == verdadeiro){
      real quartoDuplo = 85
      escreva("\nValor da diária do quarto duplo: R$" , quartoDuplo)
    }
    se(quartoHotel == 3 e verificaQuartoDisponivel == verdadeiro){
      real quartoSuite = 120
      escreva("\nValor da diária do quarto suíte: R$" , quartoSuite)
    }
    se(quartoHotel > 3 ){
      escreva("Quarto inválido")
    }
  }
}