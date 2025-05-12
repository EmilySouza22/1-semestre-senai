/*

As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em média 200 anos. 
A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez. 

Programar um sistema que calcule o total de filhotes ao longo da vida e a média de filhotes de uma baleia dessa espécie por década.

*/

programa {
  funcao inicio() {
    
    inteiro totalDecadas
    inteiro idadeBaleia
    inteiro totalFilhotes
    inteiro filhotesMedia

    escreva("Digite a idade da Baleia: ")
    leia(idadeBaleia)

    // Calculo de quantos filhotes a baleia teve ao longo da vida.
    totalFilhotes = (idadeBaleia / 4)

    // Media de Filhotes
    
    totalDecadas = idadeBaleia / 10

    filhotesMedia = totalFilhotes / totalDecadas
    
    escreva("A baleia teve no total " , totalFilhotes)
    escreva(" filhotes. \n E durante sua vida em média foram " , filhotesMedia , " filhote(s) por década.")
  }
}
