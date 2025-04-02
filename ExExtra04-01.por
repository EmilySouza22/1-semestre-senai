/*
4.1.1// Crie em programa que converta um valor de temperatura de graus
Celsius para graus Fahrenheit.
*/
programa {
  funcao inicio() {
    real grausCelcius, grausFahrenheit

    escreva("Digite um valor da temperatura em graus celcius: ")
    leia(grausCelcius)

    grausFahrenheit = grausCelcius * 1.8 + 32

    escreva("Graus Celcius: " , grausCelcius , "°")
    escreva(" >>>>> Graus Fahrenheit: " , grausFahrenheit , "°") 
  }
}
