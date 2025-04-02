/*
4.1.6// Crie em programa que converta um valor de temperatura de graus
Kelvin para graus Fahrenheit.
*/
programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real grausFahrenheit, grausKelvin

    escreva("Digite um valor em graus Fahrenheit: ")
    leia(grausKelvin)

    grausFahrenheit = (grausKelvin - 273.15) * 9/5 + 32 
    grausFahrenheit = mat.arredondar(grausFahrenheit, 2)
    escreva("Graus Kelvin: " , grausKelvin, "°")
    escreva(" >>>>> Graus Fahrenheit: " , grausFahrenheit , "°") 
  }
}
