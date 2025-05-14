function exemplo1(){
    let idade = prompt("Digite sua idade: ")
    console.log(idade)

    if(idade>=18){
        console.log("Você é maior de idade")
    } else {
        console.log("Você é menor de idade")
    } 
}

function exemplo2(){
    let numero1 = Number(prompt("Digite o primeiro número: "));
    let numero2 = Number(prompt("Digite o segundo número: "));

    console.log("A soma é: " , numero1 + numero2);
}

function exemplo3(){
    let nota1 = Number(prompt("Escreva sua primeira nota: "));
    let nota2 = Number(prompt("Escreva sua segunda nota: "));
    let nota3 = Number(prompt("Escreva sua terceira nota: "));
    let nota4 = Number(prompt("Escreva sua quarta nota: "));

    let media = (nota1 + nota2 + nota3 + nota4)/4
    console.log(media);

    if(media >= 60){
        console.log("Aprovado!")
    } else {
        console.log("Reprovado!")
    }
}

function exemplo4(){ /* Functions exemplos */

    function olaMundo(){
        console.log("Olá mundo")
        console.log("Olá mundo novamente")
        console.log("Olá mundo mais uma vez...")
    }

    function somar(valor1, valor2){
        let resultado = valor1 + valor2;
        console.log(resultado)
    }

    let subtrair = function(valor3,valor4){
        console.log(valor3 - valor4);
        return valor3 - valor4;
    }

    function possuiCNH (valorString) {
        console.log('AI MEUDEUS', valorString)
    }

    const pessoa = {
        nome: "Emily",
        idade: 20,
        cnh: possuiCNH("SIM")
    }
    console.log(pessoa)
}

function exemplo5(){ /* Arrays exemplos */

    //arrays exemplo inicial

    let vetor = [1, 22, 34, 55, 60];
    console.log(vetor[2]); // 34
    console.log(vetor[0]); // 1
    console.log("====================")

    //arrays com diferentes tipos de dados
    let vetor1 = [22, "Setembro", true, 0];
    console.log(vetor1[0]); // 22
    console.log(vetor1[1]); // "Setembro"
    console.log(vetor1[2]); // true
    console.log(vetor1[3]); // 0
    console.log("====================")

    //arrays alterando valor
    let vetor3 = [2, 4, 6, 8];
    console.log(vetor3[1]); // 4
    vetor3[1] = 3;
    console.log(vetor3[1]); // 3
}

function exemplo6(){ /* Objects exemplos */

    const carro = {
        portas: 4,
        rodas: 4,
        nome: "BMW"
    };

    carro.cavalos = 540; // adicionou a propriedade "cavalos"
    carro.multas = false;

    console.log(carro);

    carro.nome = "BMW X1";

    console.log(carro);
}

function exemplo7(){ /* While exemplo */

    //inicio
    function numeros(){
        index = 1; // é o contador
        while(index <= 10){ 
            console.log(`O número agora é: ${index}`)
            index++;
        }
    }
    //fim
}

function exemplo8(){ /* Exemplo While combinado */

    let idademinima = 0;
    let aceitouTermos = false;

    while (aceitouTermos == false || idademinima < 18) {

        idademinima = parseInt(prompt(`Qual sua idade?`));
        let resposta = prompt(`Aceita o termo? Sim / Não`);

        if (resposta === 'sim') {
            aceitouTermos = true;
        } else {
            aceitouTermos = false;
        }
    }

    alert(`Você está inscrito`);
}

function exemplo9(){ /* For com array */

    //mostrando no console a lista de compras
    let listaCompras = ['arroz', 'feijão', 'pão', 'café', 'presunto'];
    for(let i = 0; i < listaCompras.length; i++){
        console.log(listaCompras[i]);
    }

    //tirando da lista as frutas compradas
    let listaFrutas = ['banana', 'uva', 'maçã', 'laranja', 'melancia', 'morango'];
    for(i = listaFrutas.length; i != 0; i--){
        console.log(listaFrutas);
        const jaComprei = listaFrutas.shift();
        console.log(`Acabei de comprar ${jaComprei}! Pode tirar da lista.`);
    }
}

function exemplo10(){ /* for of */
    let dias = ['segunda', 'terça', 'quarta', 'quinta', 'sexta'];

    for(let dia of dias){
        console.log(dia);
    }
}

function exemplo11(){ /* Exemplo do-while */

    //Ele sempre executa pelo menos 1 vez o código
    let num = 1;
    let max = 10;
    do{
        console.log(num);
        num++;
    }while(num < max);
}

function exemplo12(){
    
}

function exemplo13(){
    
}
