/*

Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, 
o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. 

Após, calcule e mostre o valor a ser pago.

*/
programa {
  funcao inicio() {
    
    cadeia idPeca1
    inteiro numeroPecas1
    real valorUnitarioPecas1

    cadeia idPeca2
    inteiro numeroPecas2
    real valorUnitarioPecas2

    real valorPeca1
    real valorPeca2
    real valorTotal

    escreva("Digite o código da primeira peça:")
    leia(idPeca1)
    escreva("Digite o número da primeira peça(s):")
    leia(numeroPecas1)
    escreva("Digite o valor unitário da primeira peça:")
    leia(valorUnitarioPecas1)

    escreva("Digite o código da segunda peça:")
    leia(idPeca2)
    escreva("Digite o número da segunda peça(s):")
    leia(numeroPecas2)
    escreva("Digite o valor unitário da segunda peça(s):")
    leia(valorUnitarioPecas2)

    valorPeca1 = (numeroPecas1 * valorUnitarioPecas1)
    valorPeca2 = (numeroPecas2 * valorUnitarioPecas2)

    valorTotal = valorPeca1 + valorPeca2

    escreva("O valor a ser pago das duas peças será de R$: " + valorTotal)

  }
}
