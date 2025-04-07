/*
Classificação de Notas: Peça ao usuário para inserir sua nota em uma escala de 0 a 100 e, 
em seguida, atribua uma classificação (A, B, C, D ou E) com base na nota.
*/
programa {
  funcao inicio() {
    inteiro notaAluno

    escreva("Digite sua nota em uma escala de 0 a 100: ")
    leia(notaAluno)

    //81 a 100 = A
    //61 a 80 = B
    //41 a 60 = C
    //21 a 40 = D 
    //0 a 20 = E

    se(notaAluno >= 81){
      escreva("Meus parabéns! Sua nota é A, arrasou!")
    }
    se(notaAluno >= 61 e notaAluno <= 80){
      escreva("Bom! Sua nota é B! Continue estudando...")
    }
    se(notaAluno >= 41 e notaAluno <= 60){
      escreva("Pode ser melhor! Sua nota é C! Continue estudando...")
    }
    se(notaAluno >= 21 e notaAluno <= 40){
      escreva("Sua nota é C! Precisa estudar mais, não desista!")
    }
    se(notaAluno >= 0 e notaAluno <= 20){
      escreva("Ah, não, sua nota é E! Precisa estudar muito mais! Foco! ")
    }
  }
}
