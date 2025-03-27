//Na sua lista de compras do mercado, constam apenas 3 itens: 
//arroz, batata palha e um suco de garrafa. 
//Porém, você possui apenas uma nota de R$100 para pagar. 
//Faça um programa no qual sejam digitados os valores dos itens 
//e mostre na tela valor que você deve receber (troco).

programa {
  inclua biblioteca Matematica
  funcao inicio() {
    real dinheiro
    real valorArroz
    real valorBatataPalha
    real valorSucoDeGarrafa
    real valorTroco
    real valorItens
    
    escreva("valor do arroz: ")
    leia(valorArroz)

    escreva("valor da batata palha: ")
    leia(valorBatataPalha)

    escreva("valor do suco de garrafa: ")
    leia(valorSucoDeGarrafa)

    dinheiro = 100
    valorItens = valorArroz + valorBatataPalha + valorSucoDeGarrafa
    valorTroco = dinheiro - valorItens

    escreva(" O valor do troco será de \n" )
    escreva(Matematica.arredondar(valorTroco, 2) , " reais.")
  }
}
