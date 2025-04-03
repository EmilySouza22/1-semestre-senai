/*
4.1.2// Crie em programa que converta um valor de temperatura de graus
Celsius para graus Kelvin.
*/
programa {
  funcao inicio() {
    real grausCelcius, grausKelvin

    escreva("Digite o valor da temperatura em graus Celcius: ")
    leia(grausCelcius)

    grausKelvin = grausCelcius + 273.15

    escreva("Graus Celcius: " , grausCelcius , "°")
    escreva(" >>>>> Graus Kelvin: " , grausKelvin , "°") 
  }
}
