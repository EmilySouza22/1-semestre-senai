/*

Ex49. Gerador de Nome de Super-herói
Descrição: Junta o nome do usuário com um adjetivo e um superpoder
aleatório.
Entradas: Nome (ex: "Carlos").
Exemplo de Saída: "Capitão Carlos, o Invencível das Sombras"

*/

let personagem1 = "Ahsoka"
let personagem2 = "Grogu"
let personagem3 = "Mandaloriano"
let personagem4 = "Darth vader"
let personagem5 = "Padmé"
let personagem6 = "Luke"
let personagem7 = "Leia"
let personagem8 = "Han Solo"
let personagem9 = "Palpatine"
let personagem10 = "R2D2"

let personagemAleatorio = Math.floor(Math.random() * (10 - 1) + 1);

switch(personagemAleatorio){
    case 1:
        alert(personagem1);
    case 2:
        alert(personagem2);
    case 3:
        alert(personagem3);
    case 4:
        alert(personagem4);
    case 5:
        alert(personagem5);
    case 6:
        alert(personagem6);
    case 7:
        alert(personagem7);
    case 8:
        alert(personagem8);
    case 9:
        alert(personagem9);
    case 10:
        alert(personagem10);
}