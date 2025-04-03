/*

Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).

*/
programa {
  funcao inicio() {
    real consumoMedio
    real distanciaTotal
    real combustivelTotal
    escreva("=====================================================================")
    escreva("\nQual foi a distância percorrida (Km)? ")
    leia(distanciaTotal)
    escreva("=====================================================================")
    escreva("\nE quanto de combustível no total que foi gasto durante o percurso? ")
    leia(combustivelTotal)
    escreva("=====================================================================")
    consumoMedio = (distanciaTotal / combustivelTotal)

    escreva("\nO consumo médio do automóvel foi de " + consumoMedio + " km/l.")
    escreva("\n=====================================================================")
  }
}
