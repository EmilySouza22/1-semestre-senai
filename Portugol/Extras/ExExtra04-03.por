/*
4.1.3// Crie em programa que converta um valor de temperatura de graus
Fahrenheit para graus Celsius.
*/
programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real grausCelcius, grausFahrenheit

    escreva("Digite o valor da temperatura em fahrenheit: ")
    leia(grausFahrenheit)

    grausCelcius = (grausFahrenheit - 32)/1.8
    grausCelcius = mat.arredondar(grausCelcius, 2)
    escreva("Graus Fahrenheit: " , grausFahrenheit , "°")
    escreva(" >>>>> Graus Celcius: " , grausCelcius , "°") 
  }
}
