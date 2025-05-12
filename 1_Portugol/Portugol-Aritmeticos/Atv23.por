/*

Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade. 

A média é composta por três notas: Atividade Individual, Seminário em Equipe, Projeto final. 
O usuário deve digitar as três notas e os seus respectivos pesos. 
A média deve ser calculada e mostrada na tela.


*/

programa {
  funcao inicio() {
    
    inteiro mediaPonderada

    inteiro atividadeIndividual = 10
    inteiro projetoFinal = 10
    inteiro seminarioEquipe = 10

    inteiro notaAtividadeIndividual
    inteiro notaProjetoFinal
    inteiro notaSeminarioEquipe


    escreva("Digite a sua nota referente à Atividade Individual: ")
    leia(notaAtividadeIndividual)

    escreva("Digite a sua nota referente à Seminário em Equipe: ")
    leia(notaSeminarioEquipe)

    escreva("Digite a sua nota referente à Projeto final: ")
    leia(notaProjetoFinal)

    mediaPonderada = ((notaAtividadeIndividual * atividadeIndividual) + (notaProjetoFinal * projetoFinal) + (notaSeminarioEquipe * seminarioEquipe))/ (atividadeIndividual + projetoFinal + seminarioEquipe)

    escreva("A sua média foi " , mediaPonderada)
  }
}
