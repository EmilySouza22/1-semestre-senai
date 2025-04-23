/*
4. Se fruta for:
"laranja" → "Preparando suco de laranja 🍊"
"uva" → "Preparando suco de uva 🍇"
"morango" → "Preparando suco de morango 🍓"
qualquer outro → "Essa fruta não está disponível 😢"
*/

let fruta = prompt("Cardápio: (laranja), (uva) e (morango)!")

if(fruta == 'laranja'){
    console.log("Preparando suco de laranja...")
}
if(fruta == 'uva'){
    console.log("Preparando suco de uva...")
}
if(fruta == 'morango'){
    console.log("Preparando suco de morango...")
} else {
    console.log("Essa fruta não está disponível em nosso cardápio!")
}