let num1 = Number(prompt("Digite o primeiro número"));
let num2 = Number(prompt("Digite o segundo número"));
escolhaUsuario = Number(prompt("Digite a conta para realizar: (1)subtração (2)soma (3)multiplicação (4)divisão"))

// soma, multiplicação, divisao e subtração

if(escolhaUsuario == 1){
    let contaSubtração;
    contaSubtração = num1 - num2;
    console.log("O resultado da subtração será " + contaSubtração);
}else if(escolhaUsuario == 2){
    let contaSoma;
    contaSoma = num1 + num2;
    console.log("O resultado da soma será " + contaSoma);
} else if(escolhaUsuario == 3){
    let contaMultiplicacao;
    contaMultiplicacao = num1 * num2;
    console.log("O resultado da multiplicação será " + contaMultiplicacao);
}else if(escolhaUsuario == 4){
    let contaDivisao;
    contaDivisao = num1 / num2;
    console.log("O resultado da divisão será " + contaDivisao);
}else{
    console.log("Conta inválido");
}