/*
  3. Criação de programas com operadores matemáticos
  3.1 Crie um algoritmo para calcular a área de um círculo, considerando
  a fórmula AREA = π * RAIO2. Utilize as variáveis AREA e RAIO, a
  constante π (pi = 3.14159) e os operadores aritméticos de multiplicação. 
*/
programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real area
    real raio

    escreva("Digite o valor do raio do círculo: ")
    leia(raio)

    area = 3.14159 * (mat.potencia(raio, 2.0))
    area = mat.arredondar(area, 1)
    escreva("A área do círculo é de " , area , " metros quadrados.")

  }
}