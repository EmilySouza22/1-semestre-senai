/*

Ex48 Verificar ano bissexto. Solicite ao usuário que insira um ano.

Verifique se o ano é bissexto (um ano é bissexto se for divisível por 4, mas não por 100, 
exceto se for divisível por 400) e exiba uma mensagem com o resultado em alert.

*/

let anoAleatorio = Number(prompt("Insira um ano."));

resto1 = anoAleatorio % 4
resto2 = anoAleatorio % 100
resto3 = anoAleatorio % 400
if(resto1 === 0 && resto2 != 0){
    alert("Ano bissexto")
}else if(resto3 === 0){
    alert("Ano bissexto")
}else{
    alert("Não é bissexto")
}