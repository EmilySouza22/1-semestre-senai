//Um festival de música está terceirizando a montagem da estrutura. 
//A empresa contratada necessita saber uma estimativa de público para calcular a quantidade de bares e banheiros. 
//O cálculo utilizado é de 1 banheiro para cada 50 pessoas e 1 bar para cada 150 pessoas. 
//Criar um programa onde seja digitado o público esperado e mostrar na tela em média quantos banheiros e bares seriam necessários.

programa {
  funcao inicio() {

    inteiro publicoEstimativa

    inteiro divisorBanheiro = 1
    inteiro multiplicadorBanheiroPessoas = 50

    inteiro divisorBar = 1
    inteiro multiplicadorBarPessoas = 150


    inteiro baresMedia
    inteiro banheirosMedia

    escreva("Digite a quantidade de pessoas esperado para o evento: ")
    leia(publicoEstimativa)

    /* Cálculo 
    Regra de 3 para descobrir a quantidade necessária de banheiros e bares
                divisorBanheiro --- multiplicadorPessoas
                banheirosMedia --- publicoEstimativa
    */

    banheirosMedia = (divisorBanheiro * publicoEstimativa)/ multiplicadorBanheiroPessoas 

    baresMedia = (divisorBar * publicoEstimativa) / multiplicadorBarPessoas

    escreva("Serão necessários para " , publicoEstimativa)
    escreva(" pessoas, " , banheirosMedia)
    escreva(" banheiro(s) e " , baresMedia , " bar(es) ")
  }
}
