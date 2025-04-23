/*
22. Um cientista decide viajar no tempo. Se o ano for menor que 2020, ele vai para o
passado. Se for maior, vai para o futuro.

let ano;

Exiba:
"Viajando para o passado..." ou
"Rumo ao futuro!"
*/
let anoViagem = Number(prompt("Digite o ano que você deseja ir!"));

if(anoViagem <= 2020){
    console.log("Viajando para o passado...");
} else {
    console.log("Rumo ao futuro!");
}