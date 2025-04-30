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

}

function exercicio12(){
    
}

function exercicio13(){
    
}

function exercicio14(){
    
}

function exercicio15(){
    
}