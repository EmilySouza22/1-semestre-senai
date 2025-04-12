/*
38. Se for dia 31 de outubro e estiver com fantasia, mostre "Doces para você!"

let data;
let temFantasia;
*/
let data = prompt("Qual a data de hoje? Digite em DD/MM");
let temFantasia = prompt("Você está com fantasia?");

if(data == '31/10' && temFantasia == 'sim'){
    console.log("Doces para você!")
}else{
    console.log("Não tem doces pra você...")
}