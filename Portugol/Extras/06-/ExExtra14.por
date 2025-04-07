/*
Jogo de Adivinhação: Crie um número aleatório entre 1 e 10. 
Peça ao usuário para adivinhar o número e, em seguida, diga se eles acertaram ou não.
*/
programa {
  inclua biblioteca Util --> u
  funcao inicio() {
    inteiro numeroAleatorio, numeroUsuario

    numeroAleatorio = u.sorteia(1, 10)

    escreva("Tente adivinhar o número que o computador irá tirar! ")
    leia(numeroUsuario)

    se(numeroAleatorio == numeroUsuario){
      escreva("Boa! Você adivinhou corretamente")
    } senao {
      escreva("Você errou! O número que o computador escolheu foi: " , numeroAleatorio)
    }
  }
}
