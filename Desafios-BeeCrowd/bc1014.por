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