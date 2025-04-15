/* Funções exemplos */

function olaMundo(){
    console.log("Olá mundo")
    console.log("Olá mundo novamente")
    console.log("Olá mundo mais uma vez...")
}

function somar(valor1, valor2){
    let resultado = valor1 + valor2;
    console.log(resultado)
}

let subtrair = function(valor3,valor4){
    console.log(valor3 - valor4);
    return valor3 - valor4;
}

function possuiCNH (valorString) {
    console.log('AI MEUDEUS', valorString)
}

const pessoa = {
    nome: "Emily",
    idade: 20,
    cnh: possuiCNH("SIM")
}
console.log(pessoa)