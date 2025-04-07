/*
Desenvolva um programa que determine se um triângulo é escaleno, isósceles ou equilátero, 
com base nos comprimentos dos seus lados.
*/
programa {
  funcao inicio() {
    inteiro trianguloEscaleno, trianguloIsosceles, trianguloEquilatero

    inteiro ladosTriangulo

    //comprimento
    inteiro comp1, comp2, comp3

    escreva("Digite em sequência as três medidas do triângulo: ")
    leia(comp1, comp2, comp3)

    //Triangulo Equilatero
    //Três lados iguais
    se(comp1 == comp2 e comp1 == comp3){
      escreva("Esse triângulo é equilátero, tem todos os lados iguais!")
    }
    //Triangulo Escaleno 
    //Três lados de medidas diferentes
    se((comp1 != comp2)e
      (comp2 != comp3)e
      (comp3 != comp1)){
      escreva("Esse triângulo é escaleno, tem todos os lados diferentes!")
    }
    //Triangulo Isósceles
    //Dois lados iguais e 1 lado diferente
    se((comp1 == comp2 e comp1 != comp3)ou 
      (comp2 == comp3 e comp2 != comp1)ou 
      (comp3 == comp1 e comp3 != comp2)){
      escreva("Esse triângulo é isósceles, tem dois lados iguais e um diferente!")
    }
  }
}
