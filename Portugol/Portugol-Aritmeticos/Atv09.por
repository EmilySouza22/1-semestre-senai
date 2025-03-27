//Na volta às aulas cada aluno(a) ganhará 2 bombons (1 para si e 1 para os pais), 
//além de 1 bombom para o(a) professor(a). 
//Faça um programa no qual seja digitado a quantidade de alunos da turma 
//e mostrando quantos bombons no total devem ser comprados.

programa {
  funcao inicio() {

    inteiro quantidadeBombons
    inteiro quantidadeAlunos 
    inteiro totalBombons

    escreva("Digite a quantidade de alunos da sua turma: ")
    leia(quantidadeAlunos)
  
    totalBombons = (quantidadeAlunos * 2) + 1

    escreva("Precisará ser comprado " , totalBombons , " bombons no total.")

  }
}
