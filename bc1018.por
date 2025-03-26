/*

Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. 
As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

*/
programa {
  funcao inicio() {
    inteiro valorInteiro
    inteiro qtdNota100
    inteiro qtdNota50
    inteiro qtdNota20
    inteiro qtdNota10
    inteiro qtdNota5
    inteiro qtdNota2
    inteiro qtdNota1
    escreva("=======================================\n")
    escreva("Digite um valor inteiro: ")
    leia(valorInteiro)
    escreva("=======================================\n")
    qtdNota100 = (valorInteiro / 100)
    valorInteiro = valorInteiro - qtdNota100 * 100
    qtdNota50 = (valorInteiro / 50)
    valorInteiro = valorInteiro - qtdNota50 * 50
    qtdNota20 = (valorInteiro / 20)
    valorInteiro = valorInteiro - qtdNota20 * 20
    qtdNota10 = (valorInteiro / 10)
    valorInteiro = valorInteiro - qtdNota10 * 10
    qtdNota5 = (valorInteiro / 5)
    valorInteiro = valorInteiro - qtdNota5 * 5
    qtdNota2 = (valorInteiro / 2)
    valorInteiro = valorInteiro - qtdNota2 * 2
    qtdNota1 = (valorInteiro / 1)
    valorInteiro = valorInteiro - qtdNota1 * 1

    escreva("=======================================\n")
    escreva(qtdNota100 , " nota(s) de R$ 100,00 \n")
    escreva(qtdNota50 , " nota(s) de R$ 50,00 \n")
    escreva(qtdNota20 , " nota(s) de R$ 20,00 \n")
    escreva(qtdNota10 , " nota(s) de R$ 10,00 \n")
    escreva(qtdNota5 , " nota(s) de R$ 5,00 \n")
    escreva(qtdNota2 , " nota(s) de R$ 2,00 \n")
    escreva(qtdNota1 , " nota(s) de R$ 1,00 \n")
    escreva("=======================================\n")

  }
}
