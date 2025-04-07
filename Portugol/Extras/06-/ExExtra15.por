/*
Dia da Semana: Peça ao usuário que insira um número de 1 a 7 e, em seguida, 
mostre o dia da semana correspondente (por exemplo, 1 = Domingo, 2 = Segunda, etc.).
*/
programa {
  funcao inicio() {
    inteiro numUsuario

    escreva("Digite um número de 1 a 7: ")
    leia(numUsuario)

    se(numUsuario == 1){
      escreva("1 é Domingo")
    }
    se(numUsuario == 2){
      escreva("2 é Segunda-feira")
    }
    se(numUsuario == 3){
      escreva("3 é Terça-feira")
    }
    se(numUsuario == 4){
      escreva("4 é Quarta-feira")
    }
    se(numUsuario == 5){
      escreva("5 é Quinta-feira")
    }
    se(numUsuario == 6){
      escreva("6 é Sexta-feira")
    }
    se(numUsuario == 7){
      escreva("7 é Sábado")
    }
  }
}