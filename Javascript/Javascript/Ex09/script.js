/*
9. Você entrou em um jogo de presente secreto. Se você tirou "Carlos", você deve
comprar um livro. Se tirou "Ana", um chocolate. Qualquer outro nome, um
presente surpresa!

Resultado esperado:
"Compre um livro 📚"
"Compre um chocolate 🍫"
"Compre um presente surpresa 🎁"
*/

let nomeSorteado = prompt("Qual nome você tirou no jogo de presente secreto?")

if(nomeSorteado == 'Carlos'){
    console.log("Compre um livro 📚")
} else if (nomeSorteado == 'Ana'){
    console.log("Compre um chocolate 🍫")
} else {
    console.log("Compre um presente surpresa 🎁")
}