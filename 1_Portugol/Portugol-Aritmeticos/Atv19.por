/*

Um festival de balonismo oferece passeios de balão. 
Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15 reais. 
No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. 
Criar um programa que pergunte quantas pessoas vão no passeio e o tempo de passeio. Mostrar na tela o total cobrado pelo passeio.

*/

programa {
  funcao inicio() {

    inteiro quantidadePessoas
    inteiro tempoDoPasseio

    inteiro valorUmMetroCubicoGas = 15
    inteiro passeioCincoMinutos = 5

    inteiro umMetroCubico = 1
    inteiro dezMetrosCubicos = 10

    inteiro metrosCubicosDoPasseio

    inteiro valorGastoGas
    inteiro taxaPorPessoa = 20
    inteiro valorFinalPasseio
    
    escreva("Digite quantas pessoas irão no passeio de balão (MAXIMO 4 PESSOAS): ")
    leia(quantidadePessoas)

    escreva("Digite o tempo do passeio (EM MINUTOS): ")
    leia(tempoDoPasseio)

    /*

    regra de tres
    
               5 MIN --- 10M^3
    [tempoDoPasseio] --- metrosCubicosDoPasseio(x)

    metrosCubicosDoPasseio(x) = ( 10M^3 * [tempoDoPasseio] ) / 5 MIN
    */

    metrosCubicosDoPasseio = (dezMetrosCubicos * tempoDoPasseio ) / passeioCincoMinutos

    /*

    regra de tres
    1M^3 --- 15 reais
    metrosCubicosDoPasseio --- valorGastoGas(x)

    valorGastoGas(x) = (metrosCubicosDoPasseio * 15 REAIS) / 1M^3
    */

    valorGastoGas = (metrosCubicosDoPasseio * valorUmMetroCubicoGas) / umMetroCubico

    /* Agora, o valor total do passeio */
    valorFinalPasseio = valorGastoGas + (quantidadePessoas * taxaPorPessoa)

    escreva("O valor total do passeio será: " , valorFinalPasseio)

  }
}
