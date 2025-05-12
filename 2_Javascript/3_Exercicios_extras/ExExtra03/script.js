// 3. Utilize uma estrutura de controle para descobrir se o valor de sua idade é par ou ímpar

const pessoa = {
    nome: "Emily",
    sobrenome: "Souza",
    idade: 20
};

if(pessoa.idade % 2 == 0){
    console.log("Sua idade (" + pessoa.idade + ") é par")
}else{
    console.log("Sua idade (" + pessoa.idade + ") é ímpar")
}