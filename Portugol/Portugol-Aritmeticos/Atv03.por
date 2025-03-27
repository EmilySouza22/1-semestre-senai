// Desenvolva uma programação que peça ao usuário para digitar 
//o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). 
//Em seguida mostre na tela qual a idade do usuário em 
//anos, em meses, em dias e em semanas.

programa {
  funcao inicio() {
    
    inteiro anoDoNascimento
    inteiro anoAtual
    inteiro idadeAno
    inteiro idadeMeses
    inteiro idadeDias
    inteiro idadeSemanas

    escreva("Digite o ano que você nasceu: ")
    leia(anoDoNascimento)

    escreva("Digite o ano atual: ")
    leia(anoAtual)

    idadeAno = anoAtual - anoDoNascimento
    idadeMeses = idadeAno * 12
    idadeDias = idadeAno * 365
    idadeSemanas = idadeAno * 52
    

    escreva("Sua idade: " , idadeAno , " anos, " , idadeMeses , " meses, " , idadeDias , " dias, " , idadeSemanas , " semanas.")


  }
}
