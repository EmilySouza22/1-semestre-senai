/*

2) Crie uma programa que verifique se uma pessoa pode dirigir. 
Deve ser perguntada a idade da pessoa e se ela tiver idade suficiente para dirigir (18 anos ou mais), exiba "Você pode dirigir".

*/

programa {
  funcao inicio() {
    
    inteiro idade
    inteiro idadeMinima = 18

    escreva("Qual é a sua idade? ")
    leia(idade)

    se(idade >= idadeMinima){
      escreva("Você pode dirigir")

    }
  }
}
