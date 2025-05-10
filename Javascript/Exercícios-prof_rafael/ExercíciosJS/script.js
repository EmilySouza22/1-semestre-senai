/**
 * Exercícios tirados de /github.com/rafaellindemann/materiaisDeAula-permanente
 * 2 Operadores matemáticos com entrada de dados [2.1 até 2.10]
 */


function exercicio2_1(){ //Quanto você ganha por dia trabalhado?
    let salario = Number(prompt("Digite quanto você ganha no mês."));
    let dias = 30;

    let salario_diario = salario / dias;

    alert(`Você ganha por dia ${salario_diario}`);
}

function exercicio2_2(){ //Conta da cantina
    let valorCafe = Number(prompt("Digite o valor do café: "));
    let valorCoxinha = Number(prompt("Digite o valor da coxinha: "));
    let valorHalls = Number(prompt("Digite o valor do halls: "));
    let valorDoceDeLeite = Number(prompt("Digite o valor do doce de leite: "));

    let conta = valorCafe + valorCoxinha + valorDoceDeLeite + valorHalls;

    alert(`O valor a pagar na cantina será R$ ${conta}`);
}

function exercicio2_3(){ //Média 3 notas
    let nota1 = Number(prompt("Digite sua primeira nota: "));
    let nota2 = Number(prompt("Digite sua segunda nota: "));
    let nota3 = Number(prompt("Digite sua terceira nota: "));

    media = nota1 + nota2 + nota3;

    alert(`A média será: ${media}`);
}

function exercicio2_4(){ //Pontuação time
    let vitorias = Number(prompt("Insira o número de vitórias."));
    let empates = Number(prompt("Insira o número de vitórias."));
    let pontos = vitorias * 3 + empates;
    alert(`A pontuação do time será: ${pontos} pontos.`);
}

function exercicio2_5(){ //Cálculo do dano crítico em um jogo
    let dano = Number(prompt(`Insira o dano`));
    const critico = dano * 1.5;
    alert(`Você tomou ${critico} de dano crítico.`);
}

function exercicio2_6(){ //Cálculo do dano crítico em um jogo + bonus
    let dano = Number(prompt(`Insira o dano`));
    let bonus = Number(prompt(`Insira o dano bônus`));
    const critico = dano * 1.5 + bonus;
    alert(`Você tomou ${critico} de dano crítico.`);
}

function exercicio2_7(){ //Média ponderada de duas notas
    let nota1 = Number(prompt(`Insira sua primeira nota:`));
    let peso1 = Number(prompt(`Digite o peso da primeira prova`));        
    let nota2 = Number(prompt(`Insira sua segunda nota:`));
    let peso2 = Number(prompt(`Digite o peso da segunda prova`));
    const mediaPonderada = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2);
    alert(`A média ponderada das suas notas foi ${mediaPonderada}`);
}

function exercicio2_8(){ //Poupança
    let salario = Number(prompt(`Digite seu sálario:`));
    let luz = Number(prompt(`Digite o valor da luz`));
    let agua = Number(prompt(`Digite o valor da agua`));
    let aluguel = Number(prompt(`Digite o valor da aluguel`));
    let internet = Number(prompt(`Digite o valor da internet`));
    let gasolina = Number(prompt(`Digite o valor da gasolina`));
    const poupanca = salario - (aluguel + luz + agua + internet + gasolina);

    alert(`Saldo poupança: R$${poupanca}`);
}

function exercicio2_9(){ //Café por alunos
    let alunos = Number(prompt(`Insira o número de alunos`));   
    let cafe = Number(prompt(`Insira a quantidade de café`));  
    const cafePerCapita = cafe/alunos;

    alert(`Café per Capita: ${cafePerCapita}`);
}

function exercicio2_10(){ //Café por alunos + extra
    let alunos = Number(prompt(`Insira o número de alunos`));   
    let cafe = Number(prompt(`Insira a quantidade de café`));
    let extra = Number(prompt(`Insira a quantidade de extra`));   
    const cafePerCapita = (extra + cafe)/alunos;

    alert(`Café per Capita: ${cafePerCapita}`);
}

/**
 * 3 - Criação de programas com operadores matemáticos [3.1 até 3.17]
 */

function exercicio3_1(){ //Calculando área
    const pi = 3.14159; 
    let raioCirculo = Number(prompt(`Digite o raio do círculo para calcular a área.`));

    const areaCirculo = pi * (raioCirculo ** 2);
    
    alert(`A área do círculo será ${areaCirculo} metros quadrados`);
}

function exercicio3_2(){
    let altura = Number(prompt(`Insira a altura: `));
    let base = Number(prompt(`Insira a base: `));

    areaTriangulo = (base * altura)**2;

    alert(`A área do triângulo vai ser ${areaTriangulo}`);
}

function exercicio3_3(){
    let nome = prompt(`Digite seu nome`);
    let sobrenome = prompt(`Digite seu nome`);

    alert(`Olá ${nome} ${sobrenome}`);
}

function exercicio3_4(){
    let num1 = Number(prompt(`Digite o primeiro número`));
    let num2 = Number(prompt(`Digite o segundo número`));

    quadrado1 = num1 ** 2;
    quadrado2 = num2 ** 2;
    somaQuadrados = quadrado1 + quadrado2

    alert(`A soma dos quadrados de ${num1} e ${num2} será ${somaQuadrados}`);
}

function exercicio3_6(){
    let num1 = Number(prompt(`Digite um número para saber sua raíz e o seu quadrado`));

    const resultadoRaiz = Math.sqrt(num1 , 2);
    const resultadoQuadrado = Math.pow(num1 , 2);

    alert(`Número: ${num1}, Raíz: ${resultadoRaiz} e Quadrado: ${resultadoQuadrado}`);
}

function exercicio3_7(){
    let num1 = Number(prompt(`Digite o primeiro número`));
    let num2 = Number(prompt(`Digite o segundo número`));

    let media = (num1 + num2) / 2;
    alert(`A média dos números ${num1} e ${num2} será ${media}`);
}

function exercicio3_8(){
    let corre = 0;
    let maxCorre = 4;
    let valoresCorres = [];
    while(corre <= maxCorre){
        let valorCorre = Number(prompt(`Digite o valor da corrida`));
        valoresCorres.push(valorCorre);
        corre++;
    }
    let valorDia = valoresCorres[0] +  valoresCorres[1] + valoresCorres[2] + valoresCorres[3] + valoresCorres[4]
    alert(`O valor tirado no dia foi ${valorDia} reais`);
}

function exercicio3_9(){
    let corre = 0;
    let maxCorre = 4;
    let valoresCorres = [];
    while(corre <= maxCorre){
        let valorCorre = Number(prompt(`Digite o valor da corrida`));
        valoresCorres.push(valorCorre);
        corre++;
    }
    let valorDiaComTaxa = (valoresCorres[0] * (25/100)) + (valoresCorres[1] * (25/100)) + (valoresCorres[2] * (25/100)) + (valoresCorres[3] * (25/100)) + (valoresCorres[4] * (25/100)); 
    alert(`O valor tirado no dia foi ${valorDiaComTaxa} reais`);
}

function exercicio3_10(){
    let corre = 0;
    let maxCorre = 4;
    let valoresCorres = [];
    while(corre <= maxCorre){
        let valorCorre = 20;
        valoresCorres.push(valorCorre);
        corre++;
    }
    let valorDiaComTaxa = (valoresCorres[0] * (25/100)) + (valoresCorres[1] * (25/100)) + (valoresCorres[2] * (25/100)) + (valoresCorres[3] * (25/100)) + (valoresCorres[4] * (25/100)); 
    salarioMensal = valorDiaComTaxa * 20;  
    alert(`O valor do salário de Juca será: ${salarioMensal}`);
}

function exercicio3_11(){
    let horasTrabalhadas = Number(prompt(`Digite as horas trabalhadas desse mês`));
    let valorHoras = Number(prompt(`Digite o valor da hora trabalhada`));
    let percentualDesconto = Number(prompt(`Digite o percentual de desconto`));

    let salarioBruto = horasTrabalhadas * valorHoras;
    let totalDesconto = (percentualDesconto / 100) * salarioBruto;
    let salarioLiquido = salarioBruto - totalDesconto;

    console.log(`\n Horas Trabalhadas: ${horasTrabalhadas} \n Salário Bruto: ${salarioBruto} \n Desconto: ${totalDesconto} \n Salário Líquido: ${salarioLiquido}`)
}

function exercicio3_12(){
    let num1 = Number(prompt(`Digite um valor`));
    let num2 = Number(prompt(`Digite outro valor`));

    let x = num1;
    num1 = num2
    num2 = x;
    alert(`Valores trocados: Primeiro valor: ${num1} e Segundo Valor ${num2}`);
}

function exercicio3_13(){
    //Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor.
}

function exercicio3_14(){
    let baseRetangulo = parseInt(prompt(`Digite o valor da base do Retângulo`));
    let alturaRetangulo = parseInt(prompt(`Digite o valor da altura do Retângulo`));

    const areaRetangulo = baseRetangulo * alturaRetangulo;
    alert(`O valor da área do retângulo será ${areaRetangulo}`);
}

function exercicio3_15(){
    //Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
    //dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.
    let diaNascimento = parseInt(prompt(`Digite o dia que você nasceu`));
    let mesNascimento = parseInt(prompt(`Digite o mês que você nasceu`) - 1); // -1 pq a contagem de mês começa em 0
    let anoNascimento = parseInt(prompt(`Digite o ano que você nasceu`));

    const dataNascimento = new Date(anoNascimento, mesNascimento, diaNascimento);
    const agora = new Date();
    
    const milissegundosData = agora.getTime() - dataNascimento.getTime();

    const idadeAnos = milissegundosData / 3.154e+10;
    const idadeMes = milissegundosData / 2.628e+9;
    const idadeDias = milissegundosData / 8.64e+7;

    let mesesMilissegundos = idadeMes - idadeAnos;
    const meses = mesesMilissegundos / 30;

    let diasMilissegundos = idadeDias - idadeMes;
    const dias = (diasMilissegundos / 86400000) * 1e5;

    alert(`Você tem exatamente ${Math.floor(idadeAnos)} anos, ${Math.floor(meses)} meses e ${Math.floor(dias)} dias`);
}

function exercicio3_16(){
    //Escreva um algoritmo para ler o número total de eleitores de um munícipio, o número de votos
    //brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
}

function exercicio3_17(){
    //Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
    //Calcular e escrever o valor do novo salário.
    let salarioMensal = Number(prompt(`Digite quanto você ganha por mês.`));
    let percentualReajuste = Number(prompt(`Digite o percentual de reajuste.`));
    let valorReajuste = salarioMensal * (percentualReajuste / 100);
    let novoSalario = salarioMensal + valorReajuste;
    alert(`Valor do novo salário: R$ ${novoSalario}`);
}

/**
 * 4. Temáticos de física [4.1 até 4.6]
 */

function exercicio4_1(){ //Celsius ---> Fahrenheit
    let grausCelsius = Number(prompt(`Digite o valor da temperatura em graus Celsius`));
    grausFahrenheit = (grausCelsius * (9/5)) + 32;
    alert(`Conversão Celsius para Fahrenheit: ${grausCelsius}°C ---> ${grausFahrenheit}°F`);
}

function exercicio4_2(){ //Celsius ---> Kelvin
    let grausCelsius = Number(prompt(`Digite o valor da temperatura em graus Celsius`));
    grausKelvin = grausCelsius + 273.15;
    alert(`Conversão Celsius para Kelvin: ${grausCelsius}°C ---> ${grausKelvin}°K`);
}

function exercicio4_3(){ //Fahrenheit ---> Celsius
    let grausFahrenheit = Number(prompt(`Digite o valor da temperatura em graus Fahrenheit`));
    grausCelsius = (grausFahrenheit - 32) * (5/9);
    alert(`Conversão Fahrenheit para Celsius: ${grausFahrenheit}°F ---> ${grausCelsius}°C`);
}

function exercicio4_4(){ //Fahrenheit ---> Kelvin
    let grausFahrenheit = Number(prompt(`Digite o valor da temperatura em graus Fahrenheit`));
    grausKelvin = ((grausFahrenheit - 32) * (5/9)) + 273.15;
    alert(`Conversão Fahrenheit para Kelvin: ${grausFahrenheit}°F ---> ${grausKelvin}°K`);
}

function exercicio4_5(){ //Kelvin ---> Celsius
    let grausKelvin = Number(prompt(`Digite o valor da temperatura em graus Kelvin`));
    grausCelsius = grausKelvin - 273.15;
    alert(`Conversão Kelvin para Celsius: ${grausKelvin}°K ---> ${grausCelsius}°C`);
}

function exercicio4_6(){ //Kelvin ---> Fahrenheit
    let grausKelvin = Number(prompt(`Digite o valor da temperatura em graus Kelvin`));
    grausFahrenheit = ((grausKelvin - 273.15) * (9/5)) + 32;
    alert(`Conversão Kelvin para Fahrenheit: ${grausKelvin}°K ---> ${grausFahrenheit}°F`);
}

/**
 * 5. Seleção/Tomada de decisão [5.1 até 5.32]
*/

function exercicio5_1(){
    let senha = '1234';
    let senhaUsuario = prompt(`Digite a senha`);

    if(senhaUsuario === '1234'){
        alert(`Acesso permitido`);
    }else{
        alert(`Acesso negado`);
    }
}

function exercicio5_2(){
    let numeroA = parseInt(prompt(`Digite um número`));
    let numeroB = parseInt(prompt(`Digite outro número`));

    if(numeroA > numeroB){
        alert(`${numeroA} é maior que ${numeroB}`);
    }else if(numeroB > numeroA){
        alert(`${numeroB} é maior que ${numeroA}`);
    }else{
        alert(`Ambos são iguais`);
    }
}

function exercicio5_3(){
    let ultimoDigitoPlaca = parseInt(prompt(`Digite o último número da sua placa`));

    switch(ultimoDigitoPlaca){
        case 0:
        case 1:
            alert(`Não pode rodar na segunda-feira`);
            break;
        case 2:
        case 3:
            alert(`Não pode rodar na terça-feira`);
            break;
        case 4:
        case 5:
            alert(`Não pode rodar na quarta-feira`);
            break;
        case 6:
        case 7:
            alert(`Não pode rodar na quinta-feira`);
            break;
        case 8:
        case 9:
            alert(`Não pode rodar na sexta-feira`);
            break;
        default: 
            alert(`Dígito inválido`);
        break;
    }
}

function exercicio5_4(){
    let numeroPalestra = prompt(`Digite o n° da palestra: [1] [2] [3] [4] ou [5]`);

    switch(numeroPalestra){
        case '1':
            alert(`Animações com Strach, Laboratório 305 - 19h`);
            break;
        case '2':
            alert(`Scratch para gamers, Laboratório 512 - 20h`);
            break;
        case '3':
            alert(`JavaScript para leigos, Laboratório 101 - 19h`);
            break;
        case '4':
            alert(`Tópicos avançados de JavaScript, Laboratório 305 - 20h`);
            break;
        case '5':
            alert(`Vida e carreira, Auditório - 21h`);
            break;
        default:
            alert(`N° Inválido`);
        break;
    }
}

function exercicio5_5(){
    let peso1 = 0.4;
    let peso2 = 0.6;
    let peso3 = 1;

    let nota1 = parseFloat(prompt(`Digite a nota da Prova I`));
    let nota2 = parseFloat(prompt(`Digite a nota da Prova II`));
    let nota3 = parseFloat(prompt(`Digite a nota da Prova III`));

    const calculoMedia = ((peso1 * nota1) + (peso2 * nota2) + (peso3 * nota3)) / (peso1 + peso2 + peso3);

    if(calculoMedia >= 7.00){
        alert(`Você passou! Nota: ${calculoMedia.toFixed(1)}`)
    }else{
        alert(`Você Reprovou! Nota: ${calculoMedia.toFixed(1)}`)
    }
}

function exercicio5_6(){
    let pontuacao = parseInt(prompt(`Digite a pontuação`));

    if(pontuacao <= 10){
        alert(`Deu ruim!`);
    }else if(pontuacao > 10 && pontuacao < 100){
        alert(`Tá...Continue tentando!`);
    }else if(pontuacao >= 100 && pontuacao < 200){
        alert(`Supimpa!`);
    }else if(pontuacao >= 200){
        alert(`Mitou!`);
    }else{
        alert(`Inválido`);
    }
}

function exercicio5_7(){
    
}

function exercicio5_8(){
    
}

function exercicio5_9(){
    
}

function exercicio5_10(){
    
}

function exercicio5_11(){
    
}

function exercicio5_12(){
    
}

function exercicio5_131(){
    
}

function exercicio5_14(){
    
}

function exercicio5_15(){
    
}