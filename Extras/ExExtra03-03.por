/*

3.3// Faça um algoritmo que:
a) Leia o nome;
b) Leia o sobrenome;
c) Concatene o nome com o sobrenome;
d) Apresente o nome completo.

*/
programa {
  funcao inicio() {
    cadeia nome, sobrenome, verificacao, sobrenome2

    escreva("Digite seu nome: ")
    leia(nome)

    escreva("Digite seu primeiro sobrenome: ")
    leia(sobrenome)

    escreva("Você possui um segundo sobrenome? (sim) ou (nao) ")
    leia(verificacao)

    se(verificacao == "sim"){
      escreva("Digite seu segundo sobrenome: ")
      leia(sobrenome2)
      escreva(nome + " " + sobrenome + " " + sobrenome2)
    } senao {
      escreva(nome + " " + sobrenome)
    }

  }
}