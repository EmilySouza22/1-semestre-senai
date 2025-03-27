/*

3) Faça um programa que solicite o salário e os anos de serviço de um funcionário. 
Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.

 

*/
programa {
  funcao inicio() {
    real salarioFuncionario
    real anosServicoFuncionario
    real salarioBonus
    
    escreva("Quanto você ganha de salário? ")
    leia(salarioFuncionario)
    escreva("Quanto tempo você tem de empresa? ")
    leia(anosServicoFuncionario)

    se(anosServicoFuncionario > 5){
      salarioBonus = (salarioFuncionario * 0.05) + salarioFuncionario
      escreva("Parabéns, seu salário recebeu um bônus! Você irá receber R$" , salarioBonus)
    }
  }
}
