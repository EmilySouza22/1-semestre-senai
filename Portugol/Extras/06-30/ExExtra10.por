/*
Crie um programa que permita ao usuário escolher entre três tamanhos de pizza 
(pequeno, médio e grande) e, com base na escolha, exiba o preço correspondente.
*/
programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {

    real pizzaP = 15.99, pizzaM = 35.59, pizzaG = 60.99
    cadeia escolhaCliente

    escreva("\n=================================================================================")
    escreva("\nCardápio: \n - Pizza Pequena(P): R$" , pizzaP)
    escreva("\n - Pizza Média(M): R$" , pizzaM)
    escreva("\n - Pizza Grande(G): R$" , pizzaG)
    escreva("\nDigite (P), (M) ou (G):")
    escreva("\n=================================================================================")

    escreva("\nQual o tamanho da pizza que deseja comprar? Digite: (P) (M) ou (G) ")
    leia(escolhaCliente)

    se(escolhaCliente == "p" ou escolhaCliente == "P"){
      escreva("\nValor da pizza pequena: " , mat.arredondar(pizzaP, 2))
      retorne inicio()
    }
    se(escolhaCliente == "m" ou escolhaCliente == "M"){
      escreva("\nValor da pizza média: " , mat.arredondar(pizzaM, 2))
      retorne inicio()
    }
    se(escolhaCliente == "g" ou escolhaCliente == "G"){
      escreva("\nValor da pizza grande: " , mat.arredondar(pizzaG, 2))
      retorne inicio()
    } senao {
      escreva("\n=================================================================================")
      escreva("\nPor favor, digite o tamanho da pizza que deseja comprar: ")
      escreva("\nCardápio: \n - Pizza Pequena(P): R$" , pizzaP)
      escreva("\n - Pizza Média(M): R$" , pizzaM)
      escreva("\n - Pizza Grande(G): R$" , pizzaG)
      escreva("\nDigite (P), (M) ou (G):")
      escreva("\n=================================================================================")
    }
  }
}