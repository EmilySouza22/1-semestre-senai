/*
27. Se for antes das 12h, diga "Bom dia!". 
Se for entre 12 e 18, "Boa tarde!". Depois,
"Boa noite!"

let hora;

Exiba a saudação correta.
*/

let hora = Number(prompt("Qual é o horário?"));

if(hora < 12){
    console.log("Bom dia!")
}else if(hora >= 12 && hora <= 18){
    console.log("Boa tarde!")
}else{
    console.log("Boa noite!")
}