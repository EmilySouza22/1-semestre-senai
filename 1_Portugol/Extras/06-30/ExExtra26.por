/*
Escreva um programa que verifique se um caractere digitado é uma vogal minúscula ou um número ímpar.
*/
programa {
  funcao inicio() {
    cadeia caractereDigitado 

    escreva("Digite um caractere: ")
    leia(caractereDigitado)

    se((caractereDigitado == "a") ou 
    (caractereDigitado == "e") ou 
    (caractereDigitado == "i") ou 
    (caractereDigitado == "o") ou 
    (caractereDigitado == "u")){
      escreva(caractereDigitado , " é uma vogal minúscula!")

    } senao se((caractereDigitado == "1") ou 
    (caractereDigitado == "3") ou 
    (caractereDigitado == "5") ou 
    (caractereDigitado == "7") ou 
    (caractereDigitado == "9")){
      escreva(caractereDigitado , " é um número ímpar!")
    } senao {
      escreva(caractereDigitado , " não é uma vogal minúscula e nem um número ímpar!")
    }
    
  }
}