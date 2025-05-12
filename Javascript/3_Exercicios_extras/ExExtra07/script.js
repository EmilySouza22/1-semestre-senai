/*
7. Faça um programa que leia três notas, calcule e mostre a média aritmética entre elas.
*/

let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3)/3
console.log(media)
mediaFormatada = media.toFixed(1)
// console.log("A sua média é: " + Math.round(media * 2)/2)
console.log("A sua média é: " + mediaFormatada)