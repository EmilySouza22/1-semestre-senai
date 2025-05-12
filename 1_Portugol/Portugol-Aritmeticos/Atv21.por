/*

 Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, 
 exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos.

 Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. 
 Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total 
 e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.

*/

programa {
  funcao inicio() {
    
    inteiro totalFemeas = 9
    inteiro totalMachos = 5

    real areaPorIndividuo = 320.0
    real areaPorCasal = 400.0

    inteiro numeroCasais
    inteiro individuosSolteiros

    real areaSolteiros
    real areaCasais
    real areaTotal
    
    escreva("Digite o número de casais na reserva: ")
    leia(numeroCasais)

    areaCasais = numeroCasais * areaPorCasal

    individuosSolteiros = (totalFemeas + totalMachos) - (numeroCasais * 2)
    areaSolteiros = individuosSolteiros * areaPorIndividuo

    areaTotal = areaCasais + areaSolteiros
    escreva("Número de casais: ", numeroCasais)
    escreva("\nÁrea total dominada: ", areaTotal, " km²")
  }
}
