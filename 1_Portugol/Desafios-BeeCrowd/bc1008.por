programa {
  funcao inicio() {
    
    real valorPorHora
    real horasTrabalhadas
    real salarioTotal
    inteiro numeroFuncionario

    escreva("Digite o número do funcionário: ")
    leia(numeroFuncionario)
    escreva("Digite quanto o funcionário recebe por hora: ")
    leia(valorPorHora)
    escreva("Digite a quantidade de horas trabalhadas: ")
    leia(horasTrabalhadas)

    salarioTotal = (valorPorHora * horasTrabalhadas)

    escreva("O salário do funcionário será: " , salarioTotal , " reais.")
  }
}
