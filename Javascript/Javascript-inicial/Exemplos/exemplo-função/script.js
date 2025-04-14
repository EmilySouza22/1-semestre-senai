/* Funções exemplos */

function olaMundo(){
    console.log("Olá mundo")
    console.log("Olá mundo novamente")
    console.log("Olá mundo mais uma vez...")
}
olaMundo();

function somar(valor1, valor2){
    let resultado = valor1 + valor2;
    console.log(resultado);
}
somar(1,2);
somar(4,4);
somar(99,1);

let subtrair = function(valor3,valor4){
    console.log(valor3 - valor4);
    return valor3 - valor4;
}