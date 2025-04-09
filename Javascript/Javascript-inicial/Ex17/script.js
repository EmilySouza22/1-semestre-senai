/*
17. Você está testando o comportamento de operadores == e === em uma variável
string e number

Desafio:
let valor1 = "10";
let valor2 = 100;

Compare com == e === , e explique o resultado com console.log() .

*/

//--> Pode se alterar aqui a variavel para obter consoles diferentes...
let valor1 = "100";
let valor2 = 10;

if((valor1 == valor2) && (typeof(valor1) != typeof(valor2))){
    console.log("[valor1] " + valor1 + " é " + typeof(valor1) + " e [valor2] " + valor2 + " é " + typeof(valor2) + ", são iguais apenas no valor. " )
} else if (valor1 === valor2){
    console.log("[valor1] " + valor1 + " é " + typeof(valor1) + " e [valor2] " + valor2 + " é " + typeof(valor2) + " são iguais em valor e tipo. " )
} else {
    console.log("Não são iguais em nada!")
}