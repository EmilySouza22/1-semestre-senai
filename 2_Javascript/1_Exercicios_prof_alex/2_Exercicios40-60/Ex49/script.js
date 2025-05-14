/*

Ex49. Gerador de Nome de Super-herói
Descrição: Junta o nome do usuário com um adjetivo e um superpoder
aleatório.
Entradas: Nome (ex: "Carlos").
Exemplo de Saída: "Capitão Carlos, o Invencível das Sombras"

*/

let personagem1 = "Ahsoka, com as habilidades de liderança e combate com dois sabres de luz "
let personagem2 = "Grogu, com o poder da telecinese"
let personagem3 = "Mandaloriano, com de treinamento de guerrilheiro e habilidade com armamentos"
let personagem4 = "Darth vader, com o domínio do lado sombrio e resistência física"
let personagem5 = "Padmé, com a habilidade de negociar e unir facções"
let personagem6 = "Luke, com o domínio completo da força!"
let personagem7 = "Leia, com o uso de blaster e táticas de guerrilha."
let personagem8 = "Han Solo, com as habilidade de naves e sistemas."
let personagem9 = "Palpatine, com as habilidades de mestre sith e manipulação."
let personagem10 = "R2D2, com as habilidades de invadir sistemas imperiais"

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