/*
5. Você é um detetive cibernético e precisa descobrir se dois suspeitos dizem a
mesma coisa, mas com tipos diferentes.

let suspeito1 = "42";
let suspeito2 = 42;

Use operadores de comparação ( == e === ) para responder:
"Eles dizem a mesma coisa, mas de formas diferentes." ou
"Eles são exatamente iguais." ou
"Eles são diferentes."
*/

let suspeito1 = "42";
let suspeito2 = 42;

if(suspeito1 == suspeito2){
   console.log("Eles dizem a mesma coisa, mas de formas diferentes.") 
} else if (suspeito1 === suspeito2){
    console.log("Eles são exatamente iguais.")
} else {
    console.log("Eles são diferentes.")
}