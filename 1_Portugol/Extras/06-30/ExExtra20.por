/*
Verificando um Ano Bissexto: Peça ao usuário para inserir um ano 
e determine se ele é bissexto ou não.
*/
programa {
  funcao inicio() {
    inteiro anoAleatorio, resultadoDivisao, restoDivisao
    
    escreva("Digite um ano aleatório: ")
    leia(anoAleatorio)

    resultadoDivisao = anoAleatorio / 4
    restoDivisao = anoAleatorio - ( resultadoDivisao * 4)

    se(restoDivisao == 0){
      escreva("O ano " , anoAleatorio , " é um ano bissexto.")
    } senao{
      escreva("O ano " , anoAleatorio , " não é um ano bissexto.")
    }
  }
}