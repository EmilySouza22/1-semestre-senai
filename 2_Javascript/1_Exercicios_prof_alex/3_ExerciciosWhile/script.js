function exercicio1(){
    /*
        1. Mostre apenas os números pares de 1 a 20
    */

    let numero = 0;
    while(numero <= 20){
        alert(`Números pares: ${numero}`)
        numero += 2;
    }
}

function exercicio2(){
    /*
        2. Mostre apenas os números ímpares de 1 a 20.
    */
   let n = 1;
    while(n <= 20){
        alert(`Números ímpares ${n}`)
        n += 2;
    }
}

function exercicio3(){
    /*
        3. Imprima “Olá, mundo!” 5 vezes.
    */
   let saudacao = "Olá, mundo!"
   let repeticoes = 5;
   let index = 1;
   while(index <= repeticoes){
        alert(`Saudação (${saudacao}) Num. ${index}`)
        index++;
   }
}

function exercicio4(){
    /*
        4. Conte de 0 a 50 pulando de 5 em 5.
    */
    const minRepeticoes = 50;
    let n = 0;
    while(n <= minRepeticoes){
        alert(`0 a 50, de 5 em 5: ${n}`)
        n += 5;
    }
}

function exercicio5(){
    /*
        5. Conte de 100 até 0 diminuindo de 10 em 10.
    */
    let n = 100;
    while(n >= 0){
        alert(`100 a 0, de 10 em 10: ${n}`)
        n -= 10;
    }
}

function exercicio6(){
    /*
        6. Conte de 0 até 30 e mostre apenas os múltiplos de 3.
    */
   const quantRepeticoes = 30
   let n = 0;
   while(n <= quantRepeticoes){
        alert(`0 até 30, múltiplos de 3: ${n}`);
        n += 3;
    }
}

function exercicio7(){
    /*
        7. Conte de 1 até 10 e mostre o quadrado de cada número.
    */
    let numRepeticao = 10;
    let index = 1;
    while(index <= numRepeticao){
        alert(`Número ${index} ao quadrado é: ${index **2}`)
        index++;
    }
}

function exercicio8(){
    /*
        8. Conte de 1 até 10 e mostre o cubo de cada número
    */
    const numRepeticao = 10;
    let index = 1;
    while(index <= numRepeticao){
        alert(`O cubo de ${index} é ${index**3}`)
        index++;
    }
}

function exercicio9(){
    /*
        9. Conte de 1 até 15 e mostre se o número é par ou ímpar.
    */
    const numRepeticao = 15;
    let index = 1;
    while(index <= numRepeticao){
        alert(`O número ${index} e ele é ${index % 2 === 0 ? "par" : "ímpar"}`)
        index++;
    }
}

function exercicio10(){
    /*
        10. Conte até 100 e imprima somente os divisíveis por 4.
    */
    const numRepeticao = 100;
    let index = 0;
    while(index <= numRepeticao){
        alert(`Até 100, somente divisíveis por 4: ${index}`)
        index += 4;
    }
}

function exercicio11(){
    /*
        11. Faça um loop que mostre os números de 1 a 10 com a frase “Número: X”.
    */
    let index = 1;
    const max = 10;
    while(index <= max){
        alert(`Número: ${index}`);
        index++;
    } 
}

function exercicio12(){
    /*
        12. Conte até 20 e exiba “Fizz” para múltiplos de 3
    */
    let index = 0;
    let max = 20;
    while(index <= max){
        alert(`Fizz ${index}`);
        index += 3;
    }
}

function exercicio13(){
    /*
        13. Conte até 20 e exiba “Buzz” para múltiplos de 5.
    */
    let index = 0;
    let max = 20;
    while(index <= max){
        alert(`Buzz ${index}`);
        index += 5;
    }
}

function exercicio14(){
    /*
        14. Calcule a soma dos números de 1 a 10.
    */
    let n1 = 1;
    let n2 = 2;
    let max = 10;
    
    while(n1 < max){
        alert(`Soma: ${n1 + n2}`);
        n2++;
        n1++;
    }
}

function exercicio15(){
    /*
        15. Calcule a multiplicação de 1 a 5 (fatorial de 5).
    */
    let index = 5;
    let resultado = 1;
    while(index > 1){
        resultado = resultado * index;
        alert(`Fatorial de 5: ${resultado}`);
        index--;
    }
}

function exercicio16(){
    /*
        16. Conte quantos números pares existem entre 1 e 50.
    */
    let index = 1;
    let max = 50;
    let quantidade = 0;
    while(index <= max){
        index % 2 === 0 ? quantidade++ : false;
        index++;
    }
    alert(`Quantidade de números pares entre 1 e 50: ${quantidade}`)
}

function exercicio17(){
    /*
        17. Conte quantos múltiplos de 6 existem até 100.
    */
    let index = 1;
    let quantidade = 0;
    while(index <= 100){
        index % 6 === 0 ? quantidade++ : false;
        index++;
    }
    alert(`Quantidade de múltiplos de 6, entre 1 a 100: ${quantidade}`);
}

function exercicio18(){
    /*
        18. Conte de 1 a 30, pulando os múltiplos de 4.
    */
    let index = 1;
    while(index <= 30){
        index % 4 != 0 ? alert(`1 a 30, pulando múltiplos de 4: ${index}`) : false
        index++;
    }
}

function exercicio19(){
    /*
        19. Some os números de 1 a 100, mas pare se a soma passar de 400
    */
    let index = 1;
    let soma = 0;
    while(index <= 100 && soma < 400){
        alert(`Soma: ${soma} + ${index} = ${soma + index}`)
        soma = soma + index
        index++;
    }
}

function exercicio20(){
    /*
        20. Simule uma senha com 3 tentativas
    */
    let index = 3;
    while(index >= 1){
        alert(`Senha errada! Você tem mais ${index} tentativas`);
        index--;
    }
    if(!index){
        alert(`Suas tentativas acabaram...`)
    }
}

function exercicio21(){
    /*
        21. Conte os números de 1 a 50, mas pare se chegar a 30.
    */
    let index = 1;
    while(index <= 50){
        alert(`Contando... ${index}`)
        if(index === 30){
            index = 51;
        }
        index++;
    }
}

function exercicio22(){
    /*
        22. Conte até 100, mas exiba uma mensagem especial no 50.
    */
    let index = 1;
    while(index <= 100){
        alert(`Contando... ${index}`)
        if(index === 50){
            alert(`Parabéns, você é adotado!`)
        }
        index++;
    }
}

function exercicio23(){
    /*
        23. Conte de 10 a 0 e diga “Lançamento!” ao final.
    */
    let index = 10;
    while(index >= 0){
        alert(`Contagem Regressiva: ${index}!`)
        if(index === 0){
            alert(`Lançamento!`)
        }
        index--;
    }
}

function exercicio24(){
    /*
        24. Conte até 30 e diga “Pulando!” para múltiplos de 7
    */
    let index = 1;
    while(index <= 30){
        alert(`Contando até 30: ${index % 7 === 0 ? `Pulando!`: index}`);
        index++;
    }
}

function exercicio25(){
    /*
        25. Conte de 1 a 20 e diga “Especial!” para múltiplos de 2 e 3 ao mesmo tempo.
    */
    let index = 1;
    let max = 20;
    while(index <= max){
        alert(`Contando... ${index % 2 === 0 && index % 3 === 0 ? `Especial` : index}`);
        index++;
    }
}

function exercicio26(){
    /*
        26. Conte de 1 a 10 e diga se o número é menor ou maior que 5.
    */
    let index = 1;
    let max = 10;
    let numComparativo = 5;
    while(index <= max){
        if(index < numComparativo){
            alert(`${index} é menor que 5`);
        }else if(index === numComparativo){
            alert(`${index} é igual a 5`);
        }else{
            alert(`${index} é maior que 5`);
        }
        index++;
    }
}

function exercicio27(){
    /*
        27. Faça um loop que pare ao chegar em um número aleatório entre 1 e 10 (simulado).
    */
    let numRandom;
    numRandom = Math.floor(Math.random() * 10) + 1;
    let index = 1;
    let max = 10;
    while(index < max){
        alert(`Contando... ${index}`);
        if(index == numRandom){
            index = 11;
        }
        index++;
    }
    alert(`O número aleatório foi: ${numRandom}`)
}

function exercicio28(){
    /*
        28. Mostre todos os divisores de um número X (por exemplo, 24).
    */
    let numUsuario = prompt(`Digite um número para saber seus divisores.`);

    let index = 0;
    while(index <= numUsuario){
        if(numUsuario % index === 0){
            alert(`Os divisores de ${numUsuario} são ${index}`);
        }
        index++;
    }
}

function exercicio29(){
    /*
        29. Some apenas os números ímpares entre 1 e 20.
    */
    let index = 1;
    let n = 0;
    let max = 20;
    while(index <= max){
        if(index % 2 !== 0){
            alert(`Soma 1 a 20, números ímpares: ${index} + ${n} = ${index + n}`);
            n += index;
        }
        index++;
    }
}

function exercicio30(){
    /*
        30. Conte os múltiplos de 9 entre 1 e 100.
    */
    let index = 1;
    let max = 100;
    let multiplos = 0;
    while(index <= max){
        if(index % 9 === 0){
            multiplos++;
        }
        index++;
    }
    alert(`Quantidade múltiplos de 9, entre 1 a 100: ${multiplos}`)
}

function exercicio31(){
    /*
        31. Conte os números de 50 até 0 que não são múltiplos de 5.
    */
    let index = 50;
    let naoMultiplos = 0;
    while(index >= 0){
        if(index % 5 !== 0){
            naoMultiplos++;
        }
        index--;
    }
    alert(`Quantos números de 50 a 0 não são múltiplos de 5? Resposta: ${naoMultiplos}`)
}

function exercicio32(){
    /*
        32.  Calcule a soma dos números pares até 100.
    */
    let max = 100;
    let index = 1;
    let contador = 0;
    while(index <= max){
        if(index % 2 === 0){
            console.log(`Somando... ${index} + ${contador} = ${index + contador}`);
            contador = contador + index;
        }
        index++;
    }
    alert(`Soma final de números pares até 100: ${contador}`)
}

function exercicio33(){
    /*
        33.  Simule o funcionamento de um semáforo (verde → amarelo → vermelho).
    */
    let semaforo = ['verde', 'amarelo','vermelho'];
    let contador = 0;
    while(contador < semaforo.length){
        alert(`Semáforo está ${semaforo[contador]}`);
        contador++;
    }
}

function exercicio34(){
    /*
        34. Simule a carga de uma bateria de 0% a 100% de 10 em 10.
    */
    let index = 0;
    let max = 100;
    while(index <= max){
        alert(`Bateria: ${index}%`);
        index += 10;
    }
}

function exercicio35(){
    /*
        35. Simule a descarga de uma bateria de 100% a 0%
    */
    let index = 100;
    let min = 0;
    while(index >= min){
        alert(`Bateria descarregando: ${index}%`)
        index--;
    }
}

function exercicio36(){
    /*
        36. Crie um cronômetro de 0 a 60 segundos (simulado).
    */
    let tempo = 0;
    let maxCronometro = 10;
    const cronometro = setInterval(() => {
        console.log(`Cronômetro: ${tempo} segundos`);
        tempo++;

        if (tempo > maxCronometro) {
            clearInterval(cronometro);
        }
    }, 1000);
}

function exercicio37(){
    /*
        37. Simule a contagem de um cofre com 5 tentativas de código.
    */
    const codigoCofre = Math.floor(Math.random() * 9) + 1;
    console.log(codigoCofre);
    let codigoUsuario;
    let index = 4;
    let min = 0;
    while(index >= min){
        codigoUsuario = parseInt(prompt(`Insira o código do cofre [1 dígito]`));
        if(typeof codigoUsuario !== 'number' || codigoUsuario >= 10 || isNaN(codigoUsuario)){
            alert(`Inválido`);
            index = -1;
        }else{
            if(codigoUsuario === codigoCofre){
                alert(`Você abriu o cofre.`);
                index = -1;
            }else{
                alert(`Você tem mais ${index} tentativas restantes.`);
            }
        }
        index--;
    }
}

function exercicio38(){
    /*
        38. Simule um personagem andando 10 passos com console.log.
    */
    let index = 0;
    let maxPassos = 10;
    while(index <= maxPassos){
        console.log(`Seu personagem andou ${index} passos`);
        index++;
    }
}

function exercicio39(){
    /*
        39.  Simule uma barra de carregamento (ex: “█” aumentando)
    */
    let bateria = '█';
    let maxBateria = 100;
    let index = 0;
    while(index <= maxBateria){
        if(index > 0){
            console.log(`Bateria: [ ${index}% ${bateria} ]`);
            bateria += '█';
        }
        index += 10;
    }
}

function exercicio40(){
    /*
        40. Simule o consumo de um carro até acabar o combustível.
    */

    let combustivelTotal = 250;
    while(combustivelTotal > 0){
        let kmRodados = Math.floor(Math.random() * 10) + 1; 
        alert(`Você andou ${kmRodados}km(s), Tanque total: ${combustivelTotal}L`);
        combustivelTotal = combustivelTotal - (kmRodados / 0.1);
    }
    alert(`Acabou o combustível.`)
}

function exercicio41(){
    /*
        41. Conte de 1 até 100, mas pule todos os múltiplos de 8.
    */
    let index = 1;
    let max = 100;
    while(index <= max){
        if(index % 8 !== 0){
            alert(`Contando até 100, sem múltiplos de 8: ${index}`)
        }
        index++;
    }
}

function exercicio42(){
    /*
        42.  Simule um dado que deve cair 6 para o loop parar (sem aleatório real).
    */
    let index = 0;
    let maxDado = 6;
    while(index <= maxDado){
        alert(`Número dado: ${index}`)
        if(index === maxDado){
            index = 7;
        }
        index++;
    }
}

function exercicio43(){
    /*
        43. Conte de 1 até 100 e diga “Número primo” para os primos (sem validar ainda).
    */
    let index = 1;
    let max = 100;
    while(index <= max){
        console.log(index !== 2)
        if((index % 2 === 0 || index === 1) && index !== 2){
            alert(`Contagem 1 a 100, ${index}`);
        }else{
            alert(`Contagem 1 a 100, Número primo`);
        }
        index++;
    }
}

function exercicio44(){
    /*
        44. Calcule quantas vezes é necessário somar 1 até que a soma seja maior que
        1000.
    */
    let index = 1;
    let n = 1;
    let resultado;
    while(index <= 1000){
        resultado = n + index
        console.log(`Somando 1 até 1000: ${n} + ${index} = ${resultado}`);
        index++;
    }
    alert(`É necessário ${index} vezes.`);
}

function exercicio45(){
    /*
        45. Simule um processo de “download” aumentando de 10% em 10%
    */
    let download = 0;
    let max = 100;
    while(download <= max){
        alert(`Download: ${download}% de 100%`);
        download += 10;
    }
    
}

function exercicio46(){
    /*
        46. Simule um tempo de espera de um processo (tempo fictício de 1 a 5
        segundos)
    */
    let tempo = 0;
    let max = 5;
    const processamento = setInterval(() => {
        console.log(`Tempo de processamento: ${tempo}s`);
        tempo++;

        if(tempo > max){
            console.log(`Processamento finalizado.`);
            clearInterval(processamento);
        }
    }, 1000);
}

function exercicio47(){
    /*
        47. Simule a abertura de um cofre com senha correta na 4ª tentativa.
    */
    let tentativas = 0;
    let tentativaCorreta = 4;
    while(tentativas < tentativaCorreta){
        console.log(`Você está tentando abrir o cofre...`)
        tentativas++;
    }
    console.log(`Você conseguiu abrir o cofre na ${tentativas}ª tentativa.`)
}

function exercicio48(){
    /*
        48. Conte até 100 e diga "Múltiplo de 3", "Múltiplo de 5" ou ambos (FizzBuzz
        simplificado com while)
    */
    let contador = 0;
    let contadorMax = 100;
    while(contador <= contadorMax){
        if(contador % 3 !== 0 && contador % 5 !== 0){
            console.log(`${contador}`);
        }else if(contador % 3 === 0 && contador % 5 !== 0){
            console.log(`${contador} é múltiplo de 3`);
        }else if(contador % 5 === 0 && contador % 3 !== 0){
            console.log(`${contador} é múltiplo de 5`);
        }else{
            console.log(`${contador} é múltiplo de 3 e de 5`);
        }
        contador++;
    }
}