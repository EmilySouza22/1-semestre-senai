/*

5) Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), 
faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!".

*/
programa {
  funcao inicio() {
    real nota1Usuario
    real nota2Usuario
    real nota3Usuario
    real mediaUsuario
    
    escreva("Digite sua primeira nota: ")
    leia(nota1Usuario)

    escreva("Digite sua segunda nota: ")
    leia(nota2Usuario)

    escreva("Digite sua terceira nota: ")
    leia(nota3Usuario)

    mediaUsuario = nota1Usuario + nota2Usuario + nota3Usuario
    mediaUsuario = mediaUsuario / 3

    se(mediaUsuario >= 7){
      escreva("Aprovado!")
    }
  }
}
