// Quantos brinquedos levou
// cada brinq é uma moeda
// use if/else
//maximo moedas é 3

function ecomoeda(){
    let brinquedos = Number(prompt("Quantos brinquedos você trouxe?"))

    if(brinquedos <= 3){
        alert("Você trouxe " + brinquedos + " brinquedos! Logo tem " + brinquedos + " moedas...")
    }else if(brinquedos > 3){
        alert("Você trouxe " + brinquedos + " brinquedos? Parabéns, mas só vai ganhar três moedas!")
    }else{
        alert("Você não trouxe nenhum brinquedo? Você não ganhou nenhuma moeda!")
    }
}