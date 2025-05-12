//Crie um programa que solicite ao usuário um valor em horas e converta para minutos e segundos.

programa {
  funcao inicio() {
    
    inteiro valorHoras
    inteiro valorMinutos
    inteiro valorSegundos

    escreva("Digite um valor em horas: ")
    leia(valorHoras)

    valorMinutos = valorHoras * 60
    valorSegundos = valorMinutos * 60

    escreva(valorHoras , " hora(s) equivalem a ")
    escreva(valorMinutos , " minuto(s), que equivalem a ")
    escreva(valorSegundos , " segundos.")

  }
}
