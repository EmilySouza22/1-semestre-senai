programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {

    /*
    Extra1) 23 mod 4
    Extra2) sqrt(625)
    Extra3) sqr(20)
    Extra4) 2 + sqrt(21 / 5)  
    */ 

    real resultadoOperacao1 , resultadoOperacao2 , resultadoOperacao3 ,  resultadoOperacao4

    resultadoOperacao1 = 23%4
    resultadoOperacao2 = mat.raiz(625, 2)
    resultadoOperacao3 = mat.raiz(20, 2)
    resultadoOperacao4 = 2 + mat.raiz(21/5, 2)

    escreva("\n Resultados: \n 1)" , resultadoOperacao1)
    escreva("\n 2)" , resultadoOperacao2)
    escreva("\n 3)" , resultadoOperacao3)
    escreva("\n 4)" , resultadoOperacao4)
  }
}