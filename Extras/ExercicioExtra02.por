/*
  2. Operadores matemáticos com entrada de dados
  a) salario_diario = salario/dias //quanto tu ganhas por dia trabalhado
  b) conta = cafe+coxinha+halls+doceDeLeite //conta da cantina
  c) media = (n1+n2+n3+n4)/4 //média de quatro notas
  d) pontos = vitorias*3 + empates //pontuação de um time
  e) conta = 2*cafe+coxinha+halls+doceDeLeite //conta da cantina
  f) critico = dano * 1.5 //cálculo do dano crítico em um jogo qualquer
  g) critico = dano * 1.5 + bonus//cálculo do dano crítico em um jogo qualquer
  h) media = (n1*p1+n2*p2)/(p1+p2) //média ponderada de duas notas
  i) poupança = salario – (moradia+agua+luz+internet+gasolina+netflix+telefone+outros)
  j) conta = 3*cafe+coxinha+halls+2*doceDeLeite //conta da cantina
  k) cafe_per_capita = cafe/alunos
  l) cafe_per_capita = (cafe+extra)/alunos

*/
programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    cadeia seletor
    escreva("Digite o número do exercício: (a) (b) (c) (d) (e) (f) (g) (h) (i) (j) (k) (l): ")
    leia(seletor)
    escolha(seletor) {  
      caso "a":  
      exercicioA()
      pare  
  
      caso "b":  
      exercicioB() 
      pare  
      
      caso "c":  
      exercicioC() 
      pare  

      caso "d":  
      exercicioD() 
      pare

      caso "e":  
      exercicioE() 
      pare

      caso "f":  
      exercicioF() 
      pare

      caso "g":  
      exercicioG() 
      pare

      caso "h":  
      exercicioH() 
      pare

      caso "i":  
      exercicioI() 
      pare

      caso "j":  
      exercicioJ() 
      pare

      caso "k":  
      exercicioK() 
      pare

      caso "l":  
      exercicioL() 
      pare
      
      caso contrario:  
      escreva("Esse exercício não existe!\n")
    } 
    inicio()

  funcao exercicioA () {
    // a) salario_diario = salario/dias 
    //quanto tu ganhas por dia trabalhado
    real salario_diario, salario inteiro dias

    escreva("Qual seu salário? ")
    leia(salario)
    salario_diario = salario / 30

    escreva("Você ganha por dia R$" , salario_diario)
    escreva("\n=====================\n")
  }

  funcao exercicioB () {
    //b) conta = cafe+coxinha+halls+doceDeLeite 
    //conta da cantina
    real conta, cafe, coxinha, halls, doceDeLeite

    escreva("O café custa R$")
    leia(cafe)
    escreva("A coxinha custa R$")
    leia(coxinha)
    escreva("O halls custa R$")
    leia(halls)
    escreva("O doce de leite custa R$")
    leia(doceDeLeite)

    conta = cafe + coxinha + halls + doceDeLeite
    conta = mat.arredondar(conta, 2) 
    escreva("Sua conta da cantina ficou no total de R$" , conta)
    escreva("\n=========================\n")
  }

  funcao exercicioC () {
    // c) media = (n1+n2+n3+n4)/4 
    //média de quatro notas
    real media, n1, n2, n3, n4
    escreva("Digite sua primeira nota: ")
    leia(n1)
    escreva("Digite sua segunda nota: ")
    leia(n2)
    escreva("Digite sua terceira nota: ")
    leia(n3)
    escreva("Digite sua quarta nota: ")
    leia(n4)

    media = (n1+n2+n3+n4)/4
    escreva("Sua média total é " , media)
    escreva("\n=========================\n")
  }

  funcao exercicioD () {
    //d) pontos = vitorias*3 + empates 
    //pontuação de um time
    inteiro pontos, vitorias, empates

    escreva("Vitórias do time: ")
    leia(vitorias)
    escreva("Empates do time: ")
    leia(empates)
    
    pontos = vitorias*3+empates

    escreva("Seu time obteve " , pontos , " pontos")
    escreva("\n=====================\n")
  }

  funcao exercicioE () {
    //e) conta = 2*cafe+coxinha+halls+doceDeLeite 
    //conta da cantina
    real conta, cafe, coxinha, halls, doceDeLeite

    escreva("O café custa R$")
    leia(cafe)
    escreva("A coxinha custa R$")
    leia(coxinha)
    escreva("O halls custa R$")
    leia(halls)
    escreva("O doce de leite custa R$")
    leia(doceDeLeite)

    conta = 2*cafe + coxinha + halls + doceDeLeite
    mat.arredondar(conta, 2) = conta
    escreva("Sua conta da cantina ficou no total de R$" , conta)
    escreva("\n=====================\n")
  }

  funcao exercicioF () {
    //f) critico = dano * 1.5 
    //cálculo do dano crítico em um jogo qualquer
    real critico, dano

    escreva("Digite o dano causado: ")
    leia(dano)

    critico = (dano * 1.5)

    escreva("O dano crítico foi de " , critico)
    escreva("\n=========================\n")
  }

  funcao exercicioG () {
    //g) critico = dano * 1.5 + bonus
    //cálculo do dano crítico em um jogo qualquer
    real critico, dano, bonus

    escreva("Digite o dano: ")
    leia(dano)
    escreva("Digite o bônus do dano: ")
    leia(bonus)

    critico = (dano * 1.5) + bonus

    escreva("O dano crítico com bônus de ataque foi de " , critico)
    escreva("\n=========================\n")
  }

  funcao exercicioH () {
    //h) media = (n1*p1+n2*p2)/(p1+p2) 
    //média ponderada de duas notas
    real media, n1, n2, p1, p2

    escreva("Digite a primeira nota: ")
    leia(n1)
    escreva("Digite a segunda nota: ")
    leia(n2)
    escreva("Digite o peso da primeira prova: ")
    leia(p1)
    escreva("Digite o peso da segunda prova: ")
    leia(p2)

    media = (n1*p1+n2*p2)/(p1+p2)
    media = mat.arredondar(media, 2)
    escreva("O valor da média ponderada será: " , media)
    escreva("\n=========================\n")
  }

  funcao exercicioI () {
    //i) poupança = salario – (moradia+agua+luz+internet+gasolina+netflix+telefone+outros)
    real poupanca, salario, moradia, agua, luz, internet, gasolina, netflix, telefone, outros

    escreva("Digite seu salário: ")
    leia(salario)
    escreva("Digite o valor do aluguel: ")
    leia(moradia)
    escreva("Digite o valor da conta de água: ")
    leia(agua)
    escreva("Digite o valor da conta de luz: ")
    leia(luz)
    escreva("Digite o valor da conta de internet: ")
    leia(internet)
    escreva("Digite o valor da gasolina: ")
    leia(gasolina)
    escreva("Digite o valor da netflix: ")
    leia(netflix)
    escreva("Digite o valor da conta de telefone: ")
    leia(telefone)
    escreva("Digite o valor de outras despesas: ")
    leia(outros)

    poupanca = salario - (moradia + agua + luz + internet + gasolina + netflix + telefone + outros)
  
    escreva("O valor que você tem na poupança é de R$" , poupanca)
    escreva("\n=========================\n")
  }

  funcao exercicioJ () {
    //j) conta = 3*cafe+coxinha+halls+2*doceDeLeite 
    //conta da cantina
    real conta, cafe, coxinha, halls, doceDeLeite

    escreva("O café custa R$")
    leia(cafe)
    escreva("A coxinha custa R$")
    leia(coxinha)
    escreva("O halls custa R$")
    leia(halls)
    escreva("O doce de leite custa R$")
    leia(doceDeLeite)

    conta = 3*cafe + coxinha + halls + 2*doceDeLeite
    mat.arredondar(conta, 2) = conta
    escreva("Sua conta da cantina ficou no total de R$" , conta)
    escreva("\n=====================\n")
  }

  funcao exercicioK () {
    //k) cafe_per_capita = cafe/alunos
    real cafe_per_capita, cafe
    inteiro alunos

    escreva("Digite quanto de café foi consumido: ")
    leia(cafe)
    escreva("Digite quantos alunos beberam café: ")
    leia(alunos)

    cafe_per_capita = cafe/alunos
    mat.arredondar(cafe_per_capita, 2) = cafe_per_capita
    escreva("Café per capita: " , cafe_per_capita)
    escreva("\n=====================\n")
  }

   funcao exercicioL () {
    //l) cafe_per_capita = (cafe+extra)/alunos
    real cafe_per_capita, cafe, extra
    inteiro alunos

    escreva("Digite quanto de café foi consumido: ")
    leia(cafe)
    escreva("Digite o valor de extra: ")
    leia(extra)
    escreva("Digite quantos alunos beberam café: ")
    leia(alunos)

    cafe_per_capita = (cafe+extra) / alunos
    escreva("Café per capita com extra: " , cafe_per_capita)
    escreva("\n=====================\n")
  }
}