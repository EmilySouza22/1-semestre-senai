/*

Faça um programa que leia o nome de um vendedor, 
o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro).

Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, 
informar o total a receber no final do mês, com duas casas decimais.

*/

programa {
  funcao inicio() {
    cadeia nomeVendedor
    real salarioFixo
    real totalVendas // em dinheiro
    real totalReceber
    real comissaoVendas

    escreva("Digite o nome do vendedor: ")
    leia(nomeVendedor)
    escreva("Digite o salário do vendedor: ")
    leia(salarioFixo)
    escreva("Digite o total de vendas em dinheiro(R$): ")
    leia(totalVendas)

    comissaoVendas = totalVendas * 15 / 100
    totalReceber = comissaoVendas + salarioFixo

    escreva("O vendedor receberá " , totalReceber)

  }
}
