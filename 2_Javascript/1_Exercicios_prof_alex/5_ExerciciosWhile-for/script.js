/* 
🔸 Parte 1 – Condições simples (sem laço) [1–10] 
*/

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


/* 
🔸 Parte 2 – while com condições compostas [11–20] 
*/


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

function exercicio16(){
    /* 6. Peça login e senha até que ambos estejam corretos*/
    const loginUsuario = 'emily22';
    const senhaUsuario = '2468';

    let login;
    let senha;
    while(loginUsuario != login && senha != senhaUsuario != senha){
        login = prompt(`Insira o login`);
        senha = prompt(`Insira a senha`);
        if(loginUsuario != login && senha != senhaUsuario != senha){
            alert(`Senha incorreta, tente novamente`);
        }
    }
    alert(`Você conseguiu logar!`);
}

function exercicio17(){
    /* 7. Pergunte se o usuário deseja continuar (“sim” ou “não”) enquanto a resposta não for “não” */
    
    while(prompt(`Deseja continuar? (sim/não)`) === 'sim'){}
}

function exercicio18(){
    /* 8. Solicite dois valores. Continue pedindo até que um seja múltiplo de 3 e o outro maior que 10.*/
    let valor1 = 0
    let valor2 = 0;
    while(valor1 % 3 != 0 || valor2 > 10){
        valor1 = parseInt(prompt(`Digite o valor`));
        valor2 = parseInt(prompt(`Digite o valor`));
    }
}

function exercicio19(){
    /* 9. Enquanto o nome digitado não for "admin" ou a senha não for "321", continue pedindo login.*/
    const nome = 'admin';
    const senha = '321'
    let nomePrompt;
    let senhaPrompt;
    while(nomePrompt != nome && senhaPrompt != senha){
        nomePrompt = prompt("Insira o nome");
        senhaPrompt = prompt("Insira a senha");
    }
    alert('Você logou!')
}

function exercicio20(){
    /* 10. Enquanto não forem preenchidos nome e idade, continue solicitando.*/
    let idade = '';
    let nome = '';
    while(idade == '' && nome == ''){
        nome = prompt(`Insira o nome`);
        idade = prompt(`Insira a idade`);
    }
    alert(`nome: ${nome}, idade: ${idade}`);
}


/*
    🔸 Parte 3 – for com condições compostas [21–30]
*/

function exercicio21(){
    /* 1. Imprima todos os números de 1 a 100 que são pares e múltiplos de 3. */
    let index = 1;
    while(index <= 100){
        if(index % 3 === 0){
            alert(`Múltiplos de 3: ${index}`);
        }
        index++;
    }
}

function exercicio22(){
    /* 2. Imprima os números de 1 a 50 que são ímpares ou múltiplos de 7.*/
    let index = 1;
    while(index <= 50){
        if(index % 7 === 0){
            alert(`É múltiplos de 7: ${index}`);
        }else if(index % 2 !== 0){
            alert(`É ímpar: ${index}`);
        }
        index++;
    }
}

function exercicio23(){
    /* 3. Mostre todos os números entre 1 e 30 que não são divisíveis por 2 e por 3.*/
    let index = 1;
    while(index < 30){
        if(index % 2 !== 0 && index % 3 !== 0){
            alert(`Não divisíveis por 2 e por 3: ${index}`);
        }
        index++;
    }
}

function exercicio24(){
    /* 4. De 1 a 100, exiba apenas os que estão entre 10 e 20 ou entre 90 e 100. */
    let index = 1;
    while(index < 100){
        if((index > 10 && index < 20)||(index > 90 && index < 100)){
            alert(`${index}`);
        }
        index++;
    }
}

function exercicio25(){
    /* 5. De 0 a 20, imprima apenas os números múltiplos de 4 e não múltiplos de 8. */
    let index = 0;
    while(index < 20){
        if(index % 4 === 0 && index % 8 !== 0){
            alert(`${index}`);
        }
        index++;
    }
}

function exercicio26(){
    /* 6. Percorra de 0 a 50 e exiba os números onde (número > 30 e número < 40) ou (número % 10 === 0). */
    let index = 0;
    while(index <= 50){
        if((index > 30 && index < 40) || (index % 10 === 0)){
            alert(`${index}`);
        }
        index++;
    }
}

function exercicio27(){
    /* 7. Imprima de 1 a 20 os números pares ou divisíveis por 5.*/
    let index = 1;
    while(index <= 20){
        if(index % 2 === 0 || index % 5 === 0){
            alert(`${index}`);
        }
        index++;
    }
}

function exercicio28(){
    /* 8. Mostre todos os números entre 0 e 100 que sejam múltiplos de 6 e não múltiplos de 9.*/
    
}

function exercicio29(){
    /* 9. De 1 a 50, imprima apenas os números menores que 10 ou maiores que 40.*/
    
}

function exercicio30(){
    /* 10. Percorra os números de 1 a 30. Para cada número, imprima "Especial" se ele for múltiplo de 3 e estiver entre 10 e 25. */
    
}