function exercicio1(){
    /* 1. Peça ao usuário sua idade e se ele tem carteira de motorista. Exiba "Pode
    dirigir" se for maior de 18 e tiver carteira. */

    let idadeUsuario = parseInt(prompt(`Insira sua idade`));
    let temCarteira = prompt(`Você tem carteira de motorista? (sim ou nao)`);

    if(temCarteira == 'sim'){
        temCarteira = true;
    }else{
        temCarteira = false;
    }

    if(temCarteira === true && idadeUsuario >= 18){
        alert(`Pode dirigir`);
    }else{
        alert(`Não pode dirigir`);
    }
}

function exercicio2(){
    /* 2. Verifique se um número digitado é positivo e par. */

}

function exercicio3(){
    /* 3. Solicite um nome de usuário e uma senha. Exiba "Acesso permitido" se o
    nome for "admin" ou a senha for "1234". */
}

function exercicio4(){
    
}

function exercicio5(){
    
}