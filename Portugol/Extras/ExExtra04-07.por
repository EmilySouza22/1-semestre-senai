/*
3. Faça um programa que receba dois números e execute as operações listadas a seguir de acordo com a escolha do usuário:
1 - Média entre os números digitados
2 - Diferança entre os números
3 - Produtos entre os números digitados
4 - Divisão do primeiro pelo segundo
*/
programa {
  funcao inicio() {
    inteiro numA, numB, numEscolha

    escreva("Digite dois valores: \n")
    leia(numA, numB)
    escreva("================================")
    escreva("\nDigite um número: (1) (2) (3) (4) ")
    leia(numEscolha)

    escolha(numEscolha){

    caso 1:
    inteiro resultadoMedia
    resultadoMedia = (numA + numB)/2
    escreva("A média será " , resultadoMedia)
    pare

    caso 2:
    inteiro diferencaNum
    diferencaNum = numA - numB
    escreva("A diferença entre os números será: " , diferencaNum)
    pare

    caso 3:
    inteiro resultadoMultiplicacao
    resultadoMultiplicacao = numA * numB
    escreva("O resto será: " , resultadoMultiplicacao )
    pare

    caso 4:
    real resultadoDivisao
    resultadoDivisao = numA / numB
    escreva("A divisão dos dois números será " , resultadoDivisao)
    pare
    
    }
    se(numEscolha > 4 ou numEscolha < 1){
      escreva("Número inválido.")
    }
    
  }
}
