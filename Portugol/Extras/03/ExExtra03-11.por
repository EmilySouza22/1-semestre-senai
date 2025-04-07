/*
3.11// Com medo da violência, Mano Juca resolveu largar as ruas e
arrumar um emprego "normal".
Ele achou um empreguinho que pagava ele por hora trabalhada. De acordo
com a previsão de horas que ele teria pra trabalhar, achou que daria uma
grana legal, mas...
O abobado esqueceu de considerar que existem descontos, impostos...
Ajudem ele a fazer as contas de quanto vai ganhar.
Mas é burro esse Mano Juca!

Crie um algoritmo que:
a) Leia o valor para a variável HT (horas trabalhadas no mês);
b) Leia o valor para a variável VH (valor hora trabalhada):
c) Leia o valor para a variável PD (percentual de desconto);
d) Calcule o salário bruto // SB = HT * VH;
e) Calcule o total de desconto // TD = (PD/100)*SB;
f) Calcule o salário líquido // SL = SB – TD;
g) Apresente os valores de: Horas trabalhadas, Salário Bruto, Desconto,
Salário Liquido.

*/
programa {
  funcao inicio() {
    real ht, vh, pd, sb, td, sl

    escreva("Digite a quantidade de horas trabalhadas no mês: ")
    leia(ht)
    escreva("Digite quanto vale a hora trabalhada na empresa: ")
    leia(vh)
    escreva("Digite o percentual de desconto: ")
    leia(pd)

    sb = ht * vh
    td = (pd/100)*sb
    sl = sb - td

    escreva("\n===================================")
    escreva("\n Funcionário Juca")
    escreva("\n Horas trabalhadas: " , ht)
    escreva("\n Salário Bruto: R$" , sb)
    escreva("\n Desconto: R$" , td)
    escreva("\n Salário Liquido: R$" , sl)
    escreva("\n===================================")

  }
}
