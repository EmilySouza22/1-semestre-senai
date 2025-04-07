/*
Crie um aplicativo de conversão de moedas que permita escolher entre três moedas (dólar, euro e real) 
e, com base na escolha, converte um valor de uma moeda para outra.
*/
programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real valorInicial, valorFinal
    inteiro conversorMoeda

    escreva("Digite o valor que deseja converter em real: ")
    leia(valorInicial)
    escreva("Para qual moeda deseja converter? Digite (1)dólar (2)euro (3)libra: ")
    leia(conversorMoeda)

    se(conversorMoeda == 1){
      real moedaDolar
      moedaDolar = valorInicial / 5.90
      escreva("R$" , valorInicial , " convertido para a moeda dólar ficou $" , mat.arredondar(moedaDolar, 2))
    }
    se(conversorMoeda == 2){
      real moedaEuro
      moedaEuro = valorInicial / 6.46
      escreva("R$" , valorInicial , " convertido para a moeda euro ficou €" , mat.arredondar(moedaEuro, 2))
    }
    se(conversorMoeda == 3){
      real moedaLibra
      moedaLibra = valorInicial / 6.30
      escreva("R$" , valorInicial , " convertido para a moeda libra ficou £" , mat.arredondar(moedaLibra, 2))
    }
  }
}