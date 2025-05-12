/*
Crie um programa que classifique um aluno como aprovado se sua nota for maior ou igual a 7 
e sua frequência nas aulas for maior que 75%.
*/
programa {
  funcao inicio() {
    inteiro alunoNota, alunoFrequencia

    escreva("Digite sua nota (0 a 10): ")
    leia(alunoNota)
    escreva("Digite a sua frequência (0% a 100%): ")
    leia(alunoFrequencia)

    se(alunoNota >= 7){
      se(alunoFrequencia > 75){
        escreva("Parabéns, você atingiu a nota e a frequência para a próxima fase! Passou!")
      } senao {
        escreva("Mesmo com sua nota, sua frequência não atingiu o esperado para passar! Reprovado.")
      }
    } senao {
      escreva("Sua nota não foi suficiente! Reprovado.")
    }
  }
}
