/*
5.4 – Mano Juca palestreiro;
Faça um algoritmo que leia o número da palestra que ele quer participar e
mostre o local e o horário que ela acontecerá.
Palestras disponíveis:
1 - Animações com Scratch, laboratório 305, 19h;
2 - Scratch para gamers, laboratório 512, 20h;
3 - JavaScript para leigos, laboratório 101, 19h;
4 - Tópicos avançados de JavaScript, laboratório 305, 20h;
5 - Vida e carreira, auditório, 21h.
*/
programa {
  funcao inicio() {
    inteiro numA

    escreva("Digite o número da palestra, (1) (2) (3) (4) (5): ")
    leia(numA)

    se(numA == 1){
      escreva(" ▶ Animações com Scratch, laboratório 305, 19h")
    }
    se(numA == 2){
      escreva(" ▶ Scratch para gamers, laboratório 512, 20h")
    }
    se(numA == 3){
      escreva(" ▶ JavaScript para leigos, laboratório 101, 19h")
    }
    se(numA == 4){
      escreva(" ▶ Tópicos avançados de JavaScript, laboratório 305, 20h")
    }
    se(numA == 5){
      escreva(" ▶ Vida e carreira, auditório, 21h.")
    }

    }
  }
}
