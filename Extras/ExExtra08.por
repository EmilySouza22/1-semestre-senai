/*
8) Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos, e válidos. 
Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
*/
programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real totalEleitores, votosBrancos, votosNulos, votosValidos

    escreva("Digite o total de Eleitores do município: ")
    leia(totalEleitores)
    escreva("Digite a quantidade de votos brancos: ")
    leia(votosBrancos)
    escreva("Digite a quantidade de votos nulos: ")
    leia(votosNulos)
    escreva("Digite a quantidade de votos válidos: ")
    leia(votosValidos)


    votosBrancos = (votosBrancos * 100) / totalEleitores
    votosNulos = (votosNulos * 100) / totalEleitores
    votosValidos = (votosValidos * 100) / totalEleitores
    votosBrancos = mat.arredondar(votosBrancos, 2)
    votosNulos = mat.arredondar(votosNulos, 2)
    votosValidos = mat.arredondar(votosValidos, 2)
    escreva("\n============================================================================================================")
    escreva("\nO total de eleitores do município: " , totalEleitores , " eleitores.")
    escreva("\nResultado da votação em percentual: " , votosBrancos , "% de votos brancos, ")
    escreva(votosNulos , "% de votos nulos e ")
    escreva(votosValidos , "% de votos válidos")
    escreva("\n============================================================================================================")
  }
}
