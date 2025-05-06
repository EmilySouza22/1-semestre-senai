/**
 * Exercícios tirados de /github.com/rafaellindemann/materiaisDeAula-permanente
 * 2 Operadores matemáticos com entrada de dados 
 */


function exercicio1(){ //Quanto você ganha por dia trabalhado?
    let salario = Number(prompt("Digite quanto você ganha no mês."));
    let dias = 30;

    let salario_diario = salario / dias;

    alert(`Você ganha por dia ${salario_diario}`);
}

function exercicio2(){ //Conta da cantina
    let valorCafe = Number(prompt("Digite o valor do café: "));
    let valorCoxinha = Number(prompt("Digite o valor da coxinha: "));
    let valorHalls = Number(prompt("Digite o valor do halls: "));
    let valorDoceDeLeite = Number(prompt("Digite o valor do doce de leite: "));

    let conta = valorCafe + valorCoxinha + valorDoceDeLeite + valorHalls;

    alert(`O valor a pagar na cantina será R$ ${conta}`);
}

function exercicio3(){ //Média 3 notas
    let nota1 = Number(prompt("Digite sua primeira nota: "));
    let nota2 = Number(prompt("Digite sua segunda nota: "));
    let nota3 = Number(prompt("Digite sua terceira nota: "));

    media = nota1 + nota2 + nota3;

    alert(`A média será: ${media}`);
}

function exercicio4(){ //Pontuação time
    let vitorias = Number(prompt("Insira o número de vitórias."));
    let empates = Number(prompt("Insira o número de vitórias."));
    let pontos = vitorias * 3 + empates;
    alert(`A pontuação do time será: ${pontos} pontos.`);
}

function exercicio5(){ //Cálculo do dano crítico em um jogo
    let dano = Number(prompt(`Insira o dano`));
    const critico = dano * 1.5;
    alert(`Você tomou ${critico} de dano crítico.`);
}

function exercicio6(){ //Cálculo do dano crítico em um jogo + bonus
    let dano = Number(prompt(`Insira o dano`));
    let bonus = Number(prompt(`Insira o dano bônus`));
    const critico = dano * 1.5 + bonus;
    alert(`Você tomou ${critico} de dano crítico.`);
}

function exercicio7(){ //Média ponderada de duas notas
    let nota1 = Number(prompt(`Insira sua primeira nota:`));
    let peso1 = Number(prompt(`Digite o peso da primeira prova`));        
    let nota2 = Number(prompt(`Insira sua segunda nota:`));
    let peso2 = Number(prompt(`Digite o peso da segunda prova`));
    const mediaPonderada = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2);
    alert(`A média ponderada das suas notas foi ${mediaPonderada}`);
}

function exercicio8(){ //Poupança
    let salario = Number(prompt(`Digite seu sálario:`));
    let luz = Number(prompt(`Digite o valor da luz`));
    let agua = Number(prompt(`Digite o valor da agua`));
    let aluguel = Number(prompt(`Digite o valor da aluguel`));
    let internet = Number(prompt(`Digite o valor da internet`));
    let gasolina = Number(prompt(`Digite o valor da gasolina`));
    const poupanca = salario - (aluguel + luz + agua + internet + gasolina);

    alert(`Saldo poupança: R$${poupanca}`);
}

function exercicio9(){ //Café por alunos
    let alunos = Number(prompt(`Insira o número de alunos`));   
    let cafe = Number(prompt(`Insira a quantidade de café`));  
    const cafePerCapita = cafe/alunos;

    alert(`Café per Capita: ${cafePerCapita}`);
}

function exercicio10(){ //Café por alunos + extra
    let alunos = Number(prompt(`Insira o número de alunos`));   
    let cafe = Number(prompt(`Insira a quantidade de café`));
    let extra = Number(prompt(`Insira a quantidade de extra`));   
    const cafePerCapita = (extra + cafe)/alunos;

    alert(`Café per Capita: ${cafePerCapita}`);
}

/**
 * 3 - Criação de programas com operadores matemáticos [3.1 até 3.17]
 */

function exercicio11(){ //Calculando área
    const pi = 3.14159; 
    let raioCirculo = Number(prompt(`Digite o raio do círculo para calcular a área.`));

    const areaCirculo = pi * (raioCirculo ** 2);
    
    alert(`A área do círculo será ${areaCirculo} metros quadrados`);
}

function exercicio12(){
    let altura = Number(prompt(`Insira a altura: `));
    let base = Number(prompt(`Insira a base: `));

    areaTriangulo = (base * altura)**2;

    alert(`A área do triângulo vai ser ${areaTriangulo}`);
}

function exercicio13(){
    let nome = prompt(`Digite seu nome`);
    let sobrenome = prompt(`Digite seu nome`);

    alert(`Olá ${nome} ${sobrenome}`);
}

function exercicio14(){
    let num1 = Number(prompt(`Digite o primeiro número`));
    let num2 = Number(prompt(`Digite o segundo número`));

    quadrado1 = num1 ** 2;
    quadrado2 = num2 ** 2;
    somaQuadrados = quadrado1 + quadrado2

    alert(`A soma dos quadrados de ${num1} e ${num2} será ${somaQuadrados}`);
}

function exercicio15(){
    
}