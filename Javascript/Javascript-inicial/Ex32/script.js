/*
32. Se o personagem estiver com vida menor que 50, ele pode usar um cogumelo.

let vida;

Verifique e exiba:
"Usando cogumelo 🍄" ou
"Não é necessário ainda."
*/
let vida = prompt("Qual é a vida do personagem?")

if(vida < 50){
    console.log("Usando cogumelo 🍄")
}else{
    console.log("Não é necessário ainda.")
}