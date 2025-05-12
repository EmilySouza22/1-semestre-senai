//Crie um programa no qual o usuário deve digitar um número (base) e o seu expoente.
//Apresentar na tela o resultado da exponenciação.

programa {
  inclua biblioteca Matematica
  funcao inicio() {
    real base
    real expoente
    
    escreva("Digite o valor base: ")
    leia(base)
    escreva("Digite o valor do expoente: ")
    leia(expoente)
    escreva("O resultado da exponenciação é: ", Matematica.potencia(base, expoente))
  }
}
