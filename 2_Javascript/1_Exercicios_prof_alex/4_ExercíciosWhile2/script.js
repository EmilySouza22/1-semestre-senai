function parImpar(){
    let num = 1;
    let max = 10;
    while(num <= max){
        num % 2 === 0 ? alert(`${num}: Par`) : alert(`${num}: Ímpar`);
        num++;
    }
}

function tabuadas(){
    let contador = 1;
    let max = 10;
    while(contador <= max){
        let contador2 = 1;
        while(contador2 <= max){
            console.log(`${contador} x ${contador2} = ${contador * contador2}`);
            contador2++;
        }
        contador++;
    }
}

function senha(){
    const senhaCorreta = "4321";
    const min = 0;
    let acertou = false;

    let index = 3;
    while(index >= min && acertou === false){
        let senha = prompt(`Digite a senha:`);
        if(senha == senhaCorreta){
            alert(`Senha correta!`);
            acertou = true;
        }else{
            alert(`Senha incorreta! Você tem mais ${index} tentativas`);
        }
        index--;
    }
    if(acertou === true){
        alert(`Você logou na conta`);
    }else{
        alert(`Você errou sua senha muitas vezes. Sua conta foi bloqueada`);
    }
}

function numeroDigitado(){
    let numeroDigitado = Number(prompt(`Insira um número`));
    let digito = 0;
    while(digito < String(numeroDigitado).length){
        digito++;
    }
    alert(`Dígitos: ${digito}`);
}

function somatorioPares() {
    let contador = 1;
    let somatorio = 0;
    while(contador <= 20){
        if(contador % 2 === 0){
            alert(`O número ${contador} é par`);
            somatorio = somatorio + contador;
        }
        contador++;
    }
    alert(`A soma dos números pares de 1 a 20 é ${somatorio}`);
}

function fatorial(){
    let numero = Number(prompt(`Insira um número`));
    let contador = numero;
    let min = 1;
    let fatorial = numero;
    while(contador > min){
        fatorial = fatorial * (contador - min);
        contador--;
    }
    alert(`A fatorial de ${numero} é ${fatorial}`);
}

function numeroSecreto() {
    let numero_secreto = Math.floor(Math.random() * 20) + 1;
    let numero_usuario;
    let tentativas = 0;
    while(numero_usuario !== numero_secreto && tentativas >= 3){
        numero_usuario = Number(prompt(`Digite um número`));
        if(numero_usuario === numero_secreto){
            alert(`Parabéns, acertou!`);
        }else if(numero_usuario < numero_secreto){
            alert(`O número que você digitou é menor`);
        }else if(numero_usuario > numero_secreto){
            alert(`O número que você digitou é maior`);
        }else{
            alert(`Resposta Inválida`);
        }
    }
}