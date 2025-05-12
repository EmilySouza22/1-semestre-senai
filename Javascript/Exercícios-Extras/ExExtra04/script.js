// 4. escreva a função que receberá um símbolo 
// de moeda como parametro e retornará o nome 
// caso conheça aquele símbolo, senao retornar moeda 
// nao encontrada

let simbolo1 = "R$";
let simbolo2 = "$";
let simbolo3 = "€";

function moeda(simbolo){
    if(simbolo === "R$"){
        console.log("Moeda Real(R$)");
    } else if(simbolo === "$"){
        console.log("Moeda Dólar($)");
    } else if(simbolo === "€"){
        console.log("Moeda Euro(€)");
    } else {
        console.log("Moeda não encontrada.");
    }
}

moeda("$"); // Moeda dólar
console.log("======================");

let simbolo4 = "¥";
let simbolo5 = "£";
let simbolo6 = "₩";

function moeda2(simbolo){
    switch(simbolo){
        case "¥":
            console.log("Moeda Iene(¥)");
            break;
        case "£":
            console.log("Moeda Libra(£)");
            break;
        case "₩":
            console.log("Moeda Won(₩)");
            break;
        default:
            console.log("Moeda desconhecida");
    }
}

moeda2("£"); // Moeda Libra
