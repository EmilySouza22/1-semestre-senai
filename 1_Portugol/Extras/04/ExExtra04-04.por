/*
4.1.4// Crie em programa que converta um valor de temperatura de graus
Fahrenheit para graus Kelvin.
*/
programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real grausFahrenheit, grausKelvin

    escreva("Digite um valor em graus Fahrenheit: ")
    leia(grausFahrenheit)

    grausKelvin = (grausFahrenheit - 32)/ 1.8 + 273.15
    grausKelvin = mat.arredondar(grausKelvin, 2)
    escreva("Graus Fahrenheit: " , grausFahrenheit , "°")
    escreva(" >>>>> Graus Kelvin: " , grausKelvin , "°") 
  }
}
