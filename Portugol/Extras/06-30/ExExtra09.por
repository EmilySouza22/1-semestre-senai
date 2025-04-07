/*
Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
Calcular e escrever o valor do novo salário.
*/
programa {
  funcao inicio() {
    real salarioFuncionario, percentualReajuste, novoSalario

    escreva("Qual é salário que você recebe mensalmente? ")
    leia(salarioFuncionario)

    escreva("Qual será o percentual de reajuste? ")
    leia(percentualReajuste)

    percentualReajuste = salarioFuncionario * percentualReajuste / 100
    novoSalario = salarioFuncionario - percentualReajuste

    escreva("O salário com reajuste será R$" , novoSalario)
  }
}
