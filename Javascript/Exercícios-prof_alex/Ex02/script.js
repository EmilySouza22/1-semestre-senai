/*
2. Um guerreiro encontrou um dragão! Se ele tiver uma espada mágica e mais de 18
anos, ele pode lutar. Se não, deve fugir

E exiba:
"Você pode lutar contra o dragão!" ou "Fuja enquanto é tempo!"
*/

let espadaMagica = prompt("Você possui uma espada mágica?")
let idadeGuerreiro = prompt("Você tem quantos anos?")

if(espadaMagica == 'sim'){
    if(idadeGuerreiro >= 18){
        console.log("Você pode lutar contra o dragão!")
    } else {
        console.log("Fuja enquanto é tempo!")
    }
} else {
    console.log("Fuja enquanto é tempo!")
}