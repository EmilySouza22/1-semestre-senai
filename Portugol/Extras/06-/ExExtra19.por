/*
Mensagem Secreta: Peça ao usuário para digitar uma senha e, 
se a senha for "abracadabra", exiba uma mensagem secreta.
*/
programa {
  funcao inicio() {
    cadeia senhaUsuario

    escreva("Digite sua senha: ")
    leia(senhaUsuario)

    se(senhaUsuario == "Abracadabra" ou senhaUsuario == "abracadabra"){
      escreva("UAUU, boa! Você descobriu a mensagem secreta :D buuuu")
    } senao {
      escreva("Senha top!")
    }
  }
}