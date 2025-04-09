/*
5. Uma loja só dá desconto se o cliente comprar mais de 3 itens ou se o valor total
for maior que R$ 100.

Mostre:
"Desconto aplicado!" ou
"Sem desconto dessa vez."
*/

let quantidadeItens = Number(prompt("Quantos itens o senhor(a) deseja comprar?"))
let valorTotal = Number(prompt("Quanto deu a compra?"));

if(quantidadeItens > 3 || valorTotal > 100){
   console.log("Desconto aplicado!")
} else {
    console.log("Sem desconto dessa vez.")
}

