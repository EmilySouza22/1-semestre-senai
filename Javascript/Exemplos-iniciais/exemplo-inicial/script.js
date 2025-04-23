/*
let idade = prompt("Digite sua idade: ")
console.log(idade)

if(idade>=18){
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
} 
*/

/*
let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

console.log("A soma é: " , numero1 + numero2);
*/

let nota1 = Number(prompt("Escreva sua primeira nota: "));
let nota2 = Number(prompt("Escreva sua segunda nota: "));
let nota3 = Number(prompt("Escreva sua terceira nota: "));
let nota4 = Number(prompt("Escreva sua quarta nota: "));

let media = (nota1 + nota2 + nota3 + nota4)/4
console.log(media);

if(media >= 60){
    console.log("Aprovado!")
} else {
    console.log("Reprovado!")
}
