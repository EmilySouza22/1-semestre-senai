/*
5.3 – Mano Juca enfrenta o rodízio de carros de São Paulo;
Faça um algoritmo que leia o último número da placa do carro e mostre o
dia em que ele não pode rodar pela cidade de São Paulo.
Final 0 ou 1: não pode rodar na segunda-feira;
Final 2 ou 3: não pode rodar na terça-feira;
Final 4 ou 5: não pode rodar na quarta-feira;
Final 6 ou 7: não pode rodar na quinta-feira;
Final 8 ou 9: não pode rodar na sexta-feira.
*/
programa {
  funcao inicio() {
    inteiro numeroPlaca
  
    escreva("Digite o último número da placa do seu carro: ")
    leia(numeroPlaca)

    escolha(numeroPlaca){

      caso 0: caso 1:
      escreva("O carro com a placa cujo dígito final é " , numeroPlaca , " não pode rodar nas segundas-feiras.")
      pare

      caso 2: caso 3:
      escreva("O carro com a placa cujo dígito final é " , numeroPlaca , " não pode rodar nas terçass-feiras.")
      pare

      caso 4: caso 5:
      escreva("O carro com a placa cujo dígito final é "  , numeroPlaca , " não pode rodar nas quartas-feiras.")
      pare

      caso 6: caso 7:
      escreva("O carro com a placa cujo dígito final é " , numeroPlaca , " não pode rodar nas quintas-feiras.")
      pare

      caso 8: caso 9:
      escreva("O carro com a placa cujo dígito final é " , numeroPlaca , " não pode rodar nas sextas-feiras.")
      pare

    }

  }
}
