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
    alert(`Dígitos: ${digito}`)
}