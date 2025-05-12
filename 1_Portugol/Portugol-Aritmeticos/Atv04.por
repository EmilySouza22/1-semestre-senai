// Desenvolva um programa que pergunte ao usuário o salário bruto e calcule o salário líquido, 
//considerando um desconto de 20% para impostos.


programa {
  funcao inicio() {
    
    real salarioBruto
    real salarioLiquido
    real desconto

    escreva("Digite seu salário bruto: ")
    leia(salarioBruto)

    desconto = salarioBruto * (20 / 100) 
    salarioLiquido = salarioBruto - desconto
    escreva(salarioLiquido)

  }
}
