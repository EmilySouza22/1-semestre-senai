/*
Faça um algoritmo que leia a idade de uma pessoa expressa em anos, 
meses e dias e escreva a idade dessa pessoa expressa apenas em dias.
Considerar ano com 365 dias e mês com 30 dias.
*/
programa {
  funcao inicio() {
    inteiro idadeAnos, idadeMeses, idadeDias

    escreva("Digite sua idade: ")
    leia(idadeAnos)

    idadeMeses = idadeAnos * 12
    idadeDias = idadeAnos * 365

    escreva("Você tem exatamente: " , idadeAnos , " anos, " ,  idadeMeses , " meses, " , idadeDias , " dias.")
  }
}
