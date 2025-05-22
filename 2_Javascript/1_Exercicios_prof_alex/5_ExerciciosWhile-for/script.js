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
    let num = parseInt(prompt(`Digite algum número`));

    if(num % 2 === 0){
        alert(`é par`);
    }else{
        alert(`é ímpar`);
    }
}

function exercicio3(){
    /* 3. Solicite um nome de usuário e uma senha. Exiba "Acesso permitido" se o
    nome for "admin" ou a senha for "1234". */

    let name = prompt(`Insira seu nome`);
    let senha = prompt(`Insira sua senha`);

    if(name === 'admin' || senha === '1234'){
        alert(`Acesso permitido`);
    }else{
        alert(`Acesso negado`);
    }
}

function exercicio4(){
    /* 4. Peça dois números. Exiba "Valores válidos" se um for positivo e o outro for
    negativo. */
    let num1 = parseInt(prompt(`Insira um número`));
    let num2 = parseInt(prompt(`Insira um número`));

    if((num1 < 0 && num2 >= 0) || (num2 < 0 && num1 >= 0)){
        alert(`Valores válidos`);
    }else{
        alert(`Valores inválidos`);
    }
}

function exercicio5(){
    /* 5. Peça uma nota. Exiba "Aprovado" se a nota for maior que 6 e menor ou igual a
    10. */

    let nota = parseInt(prompt(`Insira sua nota`));

    if(nota > 6){
        alert(`Aprovado`);
    }else if(nota > 10){
        alert(`Nota inválida`);
    }else{
        alert(`Reprovado`);
    }
}

function exercicio6(){
    /* 6. Peça um número. Exiba "Número inválido" se ele não estiver entre 1 e 100. */
    
    let num = parseInt(prompt(`Insira um número`));

    if(num >= 1 && num <= 100){
        alert(`Número válido`);
    }else{
        alert(`Número inválido`);
    }
}

function exercicio7(){
    /* 7. Peça a idade e se o usuário é estudante. Exiba "Meia entrada" se for menor de
    18 ou estudante. */

    let idade = parseInt(prompt(`Insira sua idade`));
    let usuarioEstudante = prompt(`Você é estudante?`);
    
    if(usuarioEstudante == 'sim'){
        usuarioEstudante = true;
    }else{
        usuarioEstudante = false;
    }

    if(usuarioEstudante == true || idade < 18){
        alert(`Meia entrada`);
    }else{
        alert(`Sem meia entrada`);
    }
}

function exercicio8(){
    /* 8. Peça se o usuário aceitou os termos (sim/não) e confirmou o email (sim/não).
    Exiba "Cadastro completo" se ambos forem "sim". */

    let aceitouOsTermos = prompt(`Você aceitou os termos? (sim/não)`);
    let confirmouEmail = prompt(`Você confirmou o email? (sim/não)`);

    if(aceitouOsTermos == 'sim' && confirmouEmail == 'sim'){
        alert(`Cadastro completo`);
    }else{
        alert(`Cadastro não pode ser finalizado`);
    }
}

function exercicio9(){
    /* 9. Peça a altura e o peso. Exiba "Apto para o esporte" se altura > 1.60m e peso
    entre 50 e 90 kg. */

    let altura = parseFloat(prompt(`Insira sua altura`));
    let peso = parseFloat(prompt(`Insira seu peso`));
    
    if(altura > 1.60 && (peso >= 50 && peso <= 90)){
        alert(`Apto para o esporte`);
    }else{
        alert(`Não está apto para o esporte`);
    }
}

function exercicio10(){
    /* 10. Verifique se uma pessoa não é maior de idade ou não aceitou os termos. Se
    for verdade, exiba "Acesso negado". */

    let idade = parseInt(prompt(`Insira sua idade`));
    let aceitouOsTermos = prompt(`Você aceitou os termos?`);

    if(idade < 18 || aceitouOsTermos != 'sim'){
        alert(`Acesso negado`);
    }else{
        alert(`Acesso concedido`);
    }
}

function exercicio11(){
    /* 1. Enquanto a senha digitada não for “abc123” e o número de tentativas for
    menor que 3, peça a senha novamente. */

    const senha = 'abc123';
    const tentativasMax = 3;
    let tentativas = 0;
    let senhaDigitada;

    let index = 0;
    while(senhaDigitada === senha || tentativas < tentativasMax){
        senhaDigitada = prompt(`Insira a senha correta`);
        tentativas++;
        index++;
    }
}

function exercicio12(){
    /* 2. Enquanto o usuário não aceitar os termos ou tiver menos de 18 anos, continue
    perguntando */

    let aceitouTermos;
    let idadeUsuario;
    let index = 0;
    do{ 
        idadeUsuario = parseInt(prompt(`Insira sua idade`));
        aceitouTermos = prompt(`Aceitou os termos? (sim/não)`);

        if(aceitouTermos == 'sim'){
            aceitouTermos = true;
        }else{
            aceitouTermos = false;
        }
        index++;
    }while(aceitouTermos != true && idadeUsuario < 18 );
}

function exercicio13(){
    /* 3. Solicite dois números até que ambos sejam pares. */
    let num1;
    let num2;
    let index = 0;
    while((num1 % 2 != 0) && (num2 % 2 != 0)){
        num1 = parseInt(prompt(`Insira um número`));
        num2 = parseInt(prompt(`Insira um número`));
        index++;
    }
    alert(`Os dois números são pares!`);
}

function exercicio14(){
    /* 4. Peça uma letra até que ela não seja “a” e não seja “b” */
    let letra1;
    let letra2;
    while(letra1 == 'a' && letra2 == 'b'){
        letra1 = prompt(`Insira uma letra`);
        letra2 = prompt(`Insira uma letra`);
    }
}

function exercicio15(){
    /* 5. Solicite um número até que ele esteja entre 10 e 20 ou seja igual a 50. */

    let num = 0;
    while(!(((num > 10) && (num < 20)) || num === 50)){
        num = parseInt(prompt(`Digite um número: (1 a 100)`));
    }
    alert(`Você acertou!`);
}