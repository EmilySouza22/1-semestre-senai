/*
4.1.5// Crie em programa que converta um valor de temperatura de graus
Kelvin para graus Celsius.
*/
programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real grausCelcius, grausKelvin

    escreva("Digite o valor da temperatura em fahrenheit: ")
    leia(grausKelvin)

    grausCelcius = grausKelvin - 273.15
    grausCelcius = mat.arredondar(grausCelcius, 2)

    escreva("Graus Kelvin: " , grausKelvin , "°")
    escreva(" >>>>> Graus Celcius: " , grausCelcius , "°") 
  }
}
