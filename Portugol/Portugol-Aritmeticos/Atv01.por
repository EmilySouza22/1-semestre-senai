// Programar as seguintes entradas de dados de um cliente: 
//Nome, idade, nacionalidade, endereço. Após digitados os dados, 
//mostrar na tela a seguinte mensagem: 
//"Cliente [Nome], [idade] anos, [nacionalidade], reside no endereço [endereço]." 
//Exemplo: Cliente Lucas, 29 anos, brasileiro, 
//reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis.

programa {
  funcao inicio() {
    
    cadeia nomeDoCliente
    inteiro idadeDoCliente
    cadeia nacionalidadeDoCliente
    cadeia enderecoDoCliente

    escreva("Digite seu nome: ")
    leia(nomeDoCliente)
    escreva("Digite sua idade: ")
    leia(idadeDoCliente)
    escreva("Digite sua nacionalidade: ")
    leia(nacionalidadeDoCliente)
    escreva("Digite seu endereço: ")
    leia(enderecoDoCliente)

    escreva("Cliente " , nomeDoCliente , ", " , idadeDoCliente , " anos, " , nacionalidadeDoCliente , ", " , " reside no endereço " , enderecoDoCliente)

  }
}
