/*
15. O cliente quer um sabor de sorvete. Só há: "baunilha", "chocolate" ou "morango".

Desafio:
let sabor;

Use condicionais para exibir:
"Servindo sorvete de [sabor] 🍦"
Ou "Sabor indisponível 😢"
*/

let saborSorvete = prompt("Por favor, escolha o sabor do seu sorvete, temos: (baunilha). (chocolate) e (morango)");

if(saborSorvete == 'baunilha' || 
    saborSorvete == 'chocolate' || 
    saborSorvete == 'morango'){
    console.log("Servindo sorvete de " + saborSorvete + "...")
} else {
    console.log("Sabor indisponível 😢")
}