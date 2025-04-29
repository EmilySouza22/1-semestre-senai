function exercicio001(){ /*Soma*/
    let num1 = Number(prompt("Digite o primeiro número: "));
    let num2 = Number(prompt("Digite o segundo número: "));

    let soma = num1 + num2;
    alert(`O resultado da soma entre ${num1} + ${num2} será ${soma}`);
}

function exercicio002(){ /*Média Simples*/
    let num1 = Number(prompt("Digite o primeiro número: "));
    let num2 = Number(prompt("Digite o segundo número: "));
    
    let media = (num1+num2)/2
    alert(`O resultado da média entre ${num1} e ${num2} será ${media}`);   
}

function exercicio003(){ /*Alterando o nome no alert*/
    let nomeUsuario = prompt("Qual é o seu nome?");
    alert(`Olá, ${nomeUsuario}! Seja bem vindo(a)!`)
}

function exercicio004(){ /*Conversão Celsius para Fahrenheit*/
    let temperaturaCelsius = Number(prompt("Digite o grau em Celsius!"));
    let temperaturaFahrenheit = (temperaturaCelsius * (9/5)) + 32;
    alert(`A temperatura convertida será ${temperaturaFahrenheit} graus fahrenheit!`)
} 

function exercicio005(){ /*Média de 3 notas*/
    let nota1 = Number(prompt("Digite sua primeira nota"));
    let nota2 = Number(prompt("Digite sua segunda nota"));
    let nota3 = Number(prompt("Digite sua terceira nota"));

    let media = (nota1 + nota2 + nota3) / 3

    alert(`A média das notas será: ${media.toFixed(2)}`)
}

function exercicio006(){ /*IMC*/
    let pesoUsuario = Number(prompt("Insira seu peso."))
    let alturaUsuario = Number(prompt("Insira sua altura."))

    let usuarioIMC = pesoUsuario / (alturaUsuario ^ 2)

    if(usuarioIMC < 18.5){
        alert("Abaixo do peso")
    }else if(usuarioIMC >= 18.5 && usuarioIMC <= 24.9){
        alert("Peso normal")
    }else if(usuarioIMC >= 25 && usuarioIMC <= 29.9){
        alert("Sobrepeso")
    }else{
        alert("Obesidade")
    }
}

function exercicio007(){ /*Ano bissexto*/
    let anoAleatorio = Number(prompt("Insira um ano."));

    resto1 = anoAleatorio % 4
    resto2 = anoAleatorio % 100
    resto3 = anoAleatorio % 400
    if(resto1 === 0 && resto2 != 0){
        alert("Ano bissexto")
    }else if(resto3 === 0){
        alert("Ano bissexto")
    }else{
        alert("Não é bissexto")
    }
}

function exercicio008(){ /*Personagem Aleatório*/
    const personagens = {
        1: "Parabéns seu personagem é: Ahsoka, com as habilidades de liderança e combate com dois sabres de luz",
        2: "Parabéns seu personagem é: Grogu, com o poder da força",
        3: "Parabéns seu personagem é: Mandaloriano, com de treinamento de guerrilheiro e habilidade com armamentos",
        4: "Parabéns seu personagem é: Darth vader, com o domínio do lado sombrio e resistência física",
        5: "Parabéns seu personagem é: Padmé, com a habilidade de negociar e unir facções",
        6: "Parabéns seu personagem é: Luke, com o domínio completo da força!",
        7: "Parabéns seu personagem é: Leia, com o uso de blaster e táticas de guerrilha.",
        8: "Parabéns seu personagem é: Han Solo, com as habilidade de naves e sistemas.",
        9: "Parabéns seu personagem é: Palpatine, com as habilidades de mestre sith e manipulação.",
        10: "Parabéns seu personagem é: R2D2, com as habilidades de invadir sistemas imperiais",
    }

    let personagemAleatorio = Math.floor(Math.random() * (10 - 1) + 1);
    alert(personagens[personagemAleatorio]);

}

function exercicio009(){ /*Mensagens dos Signos*/ //--------->modificar dps usando DRY
    let signoUsuario;

    function checkSign(signoUsuario){
        signoUsuario = prompt("Digite seu signo!");

        switch(signoUsuario){
            case "áries":
            case "aries":
            case "Áries":
            case "Aries":
                alert("Áries, esta semana sua comunicação tá ON! Ótimo pra passar em entrevistas de emprego!")
                break;
        
            case "touro":
            case "Touro":
                alert("Touro, esta semana você está mais perto de realizar um sonho ou plano!")
                break;
        
            case "gêmeos":
            case "gemeos":
            case "Gêmeos":
            case "Gemeos":
                alert("Gêmeos, nesta semana você pode ir de 8 a 80, tome cuidado com a teimosia!")
                break;
        
            case "câncer":
            case "cancer":
            case "Câncer":
            case "Cancer":
                alert("Câncer, nesta semana viagens tendem a elevar seu espírito, mas trazem desafios!")
                break;
        
            case "leão":
            case "leao":
            case "Leão":
            case "Leao":
                alert("Leão, nesta semana seu esforço tende a ser reconhecido e você deve conseguir estabilidade.")
                break;
        
            case "virgem":
            case "Virgem":
                alert("Virgem, nesta semana você terá novos horizontes e boas mudanças a caminho!")
                break;
        
            case "libra":
            case "Libra":
                alert("Libra, nesta semana com mente ágil e papo direto, pode fazer bons acordos e parcerias pra você.")
                break;
        
            case "escorpião":
            case "escorpiao":
            case "Escorpião":
            case "Escorpiao":
                alert("Escorpião, nesta semana aproveite a energia em alta e exercite-se")
                break;
        
            case "sagitário":
            case "sagitario":
            case "Sagitário":
            case "Sagitario":
                alert("Sagitário, nesta semana você tem tudo pra se divertir, experimentar coisas novas e até viajar.")
                break;
        
            case "capricórnio":
            case "capricornio":
            case "Capricórnio":
            case "Capricornio":
                alert("Capricórnio, nesta semana mostrando maior empatia, pode se dar bem com clientes, comércio ou entrevista.")
                break;
        
            case "aquário":
            case "aquario":
            case "Aquário":
            case "Aquario":
                alert("Aquário, nesta semana tem tudo pra mostrar grandes ideias e fazer novos contatos, mas cuidado pra não se posicionar com agressividade.")
                break;
        
            case "peixes":
            case "Peixes":
                alert("Peixes, nesta semana não deve faltar energia, criatividade e iniciativa para dar cabo das tarefas ")
                break;
        
            default:
                alert("Signo inválido!")
                break;
        }
    }

    checkSign();
}

function exercicio010(){ /*Jogo do Par ou Ímpar com o PC*/

    /*
        Objetivo: O usuário joga contra o computador para ver quem vence no jogo de
        par ou ímpar.
    */

    let escolhaUsuario = prompt("Escolha par ou ímpar");
    let numeroUsuario = Number(prompt("Insira um número de 0 a 10"))

    let numeroComputador = Math.floor(Math.random() * (10 - 1) + 1)
    console.log(numeroComputador)

    somaNumeros = numeroComputador + numeroUsuario

    if(somaNumeros % 2 === 0 && escolhaUsuario === "par"){
        alert("Você venceu! Escolheu par e o número sorteado foi " + somaNumeros)
    }else if(somaNumeros % 2 != 0 && escolhaUsuario === "ímpar"){
        alert("Você venceu! Escolheu ímpar e o número sorteado foi " + somaNumeros)
    }else{
        alert(`O computador venceu! O número sorteado foi ${somaNumeros}`)
    }
}

let contador011 = 0;
function exercicio011(){ /*Contador de Cliques por Segundo*/
    /*
        Descrição: Conta quantos cliques o usuário deu.
        Entradas: Cliques em botão.
        Exemplo de Saída: “Você clicou 32 vezes!” Ao clicar no botão de resultado
    */

    contador011++;
    alert(`Você clicou ${contador011} vezes.`)
}

function exercicio012(){ /*Jogo do Número Secreto*/ 
    /*
        Descrição: Usuário tenta adivinhar um número aleatório de 1 a 100.
        Entradas: Número digitado.
        Exemplo de Saída: “Tente novamente.”
    */

    let escolhaUsuario = Number(prompt("Tente adivinhar o número de 1 a 100"));
    let numeroSorteado = Math.floor(Math.random() * (100 - 1) + 1);
    if(escolhaUsuario === numeroSorteado){
        alert("Parabéns, você acertou!");
    }else{
        alert("Tente novamente! O número era: " + numeroSorteado);
    }
}

function exercicio013(){ /*Gerador de Senhas Aleatórias*/
    /*
        Descrição: Cria senhas com letras, números e símbolos.
        Entradas: Comprimento desejado.
        Exemplo de Saída: “Senha gerada: aX$7v!2d”
    */

    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

    function gerarSenha(){
        let tamanhoSenha;
        tamanhoSenha = Number(prompt("Insira o tamanho da senha."));
        const charsetTamanho = charset.length;
        let senha =  "N";
        let index = 0;

        while(index < tamanhoSenha){
            senha += charset.charAt(Math.floor(Math.random() * charsetTamanho));
            index++;
        }
        alert(`Senha Aleatória: ${senha}`)
    }

    gerarSenha();
}

function exercicio014(){ /*Jogo da Forca*/  //------------> modificar tentativas 
    /*
        Descrição: O clássico jogo da forca com palavras ocultas.
        Entradas: Letras digitadas.
        Exemplo de Saída: “_ _ R R A M _ (Tentativas restantes: 3)”
    */
    
    function jogoForca(){
        let letra;
        let tentativas = 0;
        const palavraSecreta = "FUTEBOL";
        const letrasCertas = new Array(palavraSecreta.length);
        const tentativasMax = 3;

        while(true) {
            letra = prompt("Digite a letra para adivinhar a palavra");
            const letraMaiuscula = letra.toUpperCase();
            if(palavraSecreta.includes(letraMaiuscula)){
                const index = palavraSecreta.indexOf(letraMaiuscula);
                letrasCertas[index] = letraMaiuscula;
            }
            return;
        }   
    }

    jogoForca();
}

function exercicio015(){ /*Mini Quiz de Conhecimentos Gerais*/
    /*
        Descrição: Perguntas de múltipla escolha com pontuação final.
        Entradas: Alternativa selecionada.
        Exemplo de Saída: “Você acertou 3 de 5 perguntas.”
    */
    const quiz = {
        1: {
            pergunta: "Em JavaScript, qual método é utilizado para combinar dois ou mais arrays?", 
            alternativas: "a) push() \n b) concat() \n c) join() \n d) slice()", 
            alternativaCorreta: ["concat", "b"]
        },
        2: {
            pergunta: "Na eletrônica, qual componente armazena carga elétrica?", 
            alternativas: "a) resistor \n b) diodo \n c) capacitor \n d) indutor", 
            alternativaCorreta: ["capacitor", "c"]
        },
        3: {
            pergunta: "Em sistemas operacionais, qual algoritmo de escalonamento favorece o processo com o menor tempo de execução?", 
            alternativas: "a) Round Robin \n b) SJF (Shortest Job First) \n c) FIFO \n d) Prioridade", 
            alternativaCorreta: ["SJF", "b"]
        },
        4: {
            pergunta: "Qual é o nome da camada do modelo OSI responsável pelo roteamento de pacotes?", 
            alternativas: "a) Transporte \n b) Sessão \n c) Rede \n d) Aplicação", 
            alternativaCorreta: ["Rede", "c"]
        },
        5: {
            pergunta: "Em física, qual a unidade de medida do campo elétrico?", 
            alternativas: "a) Newton por Coulomb \n b) Joule \n c) Watt \n d) Ohm", 
            alternativaCorreta: ["Newton por Coulomb", "a"]
        },
        6: {
            pergunta: "Em bancos de dados relacionais, qual comando é usado para remover uma tabela?", 
            alternativas: "a) DELETE \n b) DROP \n c) REMOVE \n d) TRUNCATE", 
            alternativaCorreta: ["DROP", "b"]
        },
        7: {
            pergunta: "Em Python, qual é a estrutura de dados que mantém a ordem de inserção e permite chaves únicas?", 
            alternativas: "a) set \n b) list \n c) dictionary \n d) tuple", 
            alternativaCorreta: ["dictionary", "c"]
        },
        8: {
            pergunta: "Em C, qual operador é usado para acessar o valor apontado por um ponteiro?", 
            alternativas: "a) & (e comercial) \n b) * (asterisco) \n c) -> (seta) \n d) % (porcentagem)", 
            alternativaCorreta: ["*", "b"]
        },
        9: {
            pergunta: "Em C, qual biblioteca padrão deve ser incluída para usar a função printf?", 
            alternativas: "a) stdlib.h \n b) stdio.h \n c) string.h \n d) math.h", 
            alternativaCorreta: ["stdio.h", "b"]
        },
        10: {
            pergunta: "Em C, qual é o operador utilizado para incrementar o valor de uma variável em uma unidade?", 
            alternativas: "a) += \n b) ++ \n c) -- \n d) =", 
            alternativaCorreta: ["++", "b"]
        }
        
    }

    alert("Mini Quiz de Conhecimentos Gerais")

    let acertos = 0; 
    let perguntasMax = 5; 
    let alternativaSelecionada; 
    index = 0;

    const perguntasUsadas = [];
    while(index < perguntasMax){
        let numeroPergunta = Math.floor(Math.random() * Object.keys(quiz).length) + 1;
        if(perguntasUsadas.indexOf(numeroPergunta) !== -1){
            continue;
        }else{
            perguntasUsadas.push(numeroPergunta)
        }
        index++;
        alternativaSelecionada = prompt(quiz[numeroPergunta].pergunta + " \n " + quiz[numeroPergunta].alternativas);
        if(quiz[numeroPergunta].alternativaCorreta.includes(alternativaSelecionada)){
            alert("Boa acertou!");
            acertos++;
        }else{
            alert("Que pena, você errou!");
            continue;
        }
    }
    alert(`Você acertou ${acertos} de ${perguntasMax}`)
}

function exercicio016(){ /*Simulador de Sorte do Dia*/
    /*
        Descrição: Exibe uma mensagem motivacional aleatória.
        Entradas: Clique em botão.
        Exemplo de Saída: “Hoje é um ótimo dia para começar algo novo.”
    */
    const mensagensMotivacionais = {
        1:"Acredite em você e nada será impossível.",
        2:"Cada pequeno passo é um progresso.",
        3:"Força hoje, recompensa amanhã.",
        4:"Sonhe alto, comece agora.",
        5:"Desafios criam oportunidades.",
        6:"Sua persistência vai levar ao sucesso."
    }
    let nmrMensagem;
    nmrMensagem = Math.floor(Math.random() * Object.keys(mensagensMotivacionais).length) + 1;
    alert(`${mensagensMotivacionais[nmrMensagem]}`);
}

function exercicio017(){ /*Decisômetro (Sim/Não/Talvez)*/
    /*
        Descrição: Responde aleatoriamente com “Sim”, “Não” ou “Talvez”.
        Entradas: Clique em botão.
        Exemplo de Saída: “Talvez”
    */
    const respostas = ["sim", "não", "talvez"];
    let respostaAleatoria = Math.floor(Math.random() * respostas.length);
    alert(`${respostas[respostaAleatoria]}`);
}

function exercicio018(){ /*Calcular o fatorial de um número.*/
    /* 
        Solicite ao usuário que insira um número inteiro.
        Calcule o fatorial desse número e exiba o resultado em um alert. 
        (Lembre-se de que o fatorial de um número n é o produto de todos os inteiros de 1 a n ).
        Exemplo = Fatorial de 5 → 5*4*3*2*1 = 120
    */
    let numeroInteiro = Number(prompt("Insira um número inteiro"));
    let fatorial;
    let index = 0;
    let subtraendo = 1;
    const fatoracao = [];

    while(index < numeroInteiro){
        // 4 = 4*3*2*1 = 24
        console.log(numeroInteiro)
        resultado = numeroInteiro * (numeroInteiro - subtraendo)
        
        fatoracao.push(fatorial)
        console.log(fatoracao)
        

        index++;
        subtraendo++;
    }
    alert(`O resultado do fatorial de ${numeroInteiro} será ${fatorial}`);
}

function exercicio019(){ /*Quiz sobre o próprio site*/
    /*
        Descrição: Faça perguntas sobre o que o usuário acabou de ver ou clicar.
        Entradas: Alternativas múltiplas.
        Exemplo de Saída: “Você acertou! A respostaCorreta era: botão azul.”
    */
    const perguntas = {
        1: {
            pergunta:"Quantos exercícios o site tem? ",
            alternativas:"a)15 b)17 c)19 d)21",
            alternativaCerta:["d" , "21"]
        },
        2: {
            pergunta:"Qual é o nome da minha gata?",
            alternativas:"a)Bela b)Nina c)Ruby d)Mima",
            alternativaCerta:["b" , "nina"] 
        },
        3: {
            pergunta:"O fundo do site é: ",
            alternativas:"a)Galáxia b)Coração c)Estrela d)Natureza",
            alternativaCerta:["a" , "galaxia"]
        },
        4: {
            pergunta:"Meu jogo favorito é: ",
            alternativas:"a)Minecraft b)Roblox c)Fortnite d)Tetris",
            alternativaCerta:["d" , "tetris"]
        },
        5: {
            pergunta:"Qual é a minha saga favorita? ",
            alternativas:"a)Harry Potter b)Percy Jackson c)Star Wars d)Jogos Vorazes",
            alternativaCerta:["c" , "star wars"]
        }
    }
    
    numeroPerguntas = Math.floor(Math.random() * Object.keys(perguntas).length) + 1;
    let perguntasMax = 3;
    let acertos = 0;
    let index = 0;
    perguntasRepetidas = []
    while(index < perguntasMax){
        let alternativaUsuario = prompt(`${perguntas[numeroPerguntas].pergunta} \n ${perguntas[numeroPerguntas].alternativas}`);

        if(!alternativaUsuario || alternativaUsuario == " "){
            return;
        }
        if(perguntas[numeroPerguntas].alternativaCerta.includes(alternativaUsuario) || perguntasRepetidas !== -1){
            
            console.log(perguntasRepetidas)
            acertos++;
            index++;
            continue;
        }else{
            index++;
            continue;
        }
    }
    alert(`Você acertou ${acertos} de ${perguntasMax}`)
}

function exercicio020(){ /*Decodificador de Mensagem*/
    /*
        Descrição: Substitui as vogais de uma frase por símbolos.
        Entradas: Texto simples (ex: "olá mundo").
        Exemplo de Saída: "ol@ m*nd#"
    */

    function substituirVogal(digito){
        if(!digito || digito === " "){
            return digito;
        }

        const numberset = "0123456789";
        if(numberset.includes(digito)){
            return digito;
        }
        
        const vowelset = "aáàâãäeéèêëiíìîïoóòôõöuúùûü"
        const charset = "!@#$%&*-+=~?"
        digito = digito.toLowerCase()
        if(vowelset.includes(digito)){
            return charset.charAt(Math.floor(Math.random() * charset.length));
        }else{
            return digito;
        }
    }

    const mensagem = prompt("Digite algo.");
    const letrasArray = [...mensagem];
    const mensagemCodificada = letrasArray.map(substituirVogal);
    alert(mensagemCodificada.join(""));
}