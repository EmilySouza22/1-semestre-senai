function exercicio001(){
    let num1 = Number(prompt("Digite o primeiro número: "));
    let num2 = Number(prompt("Digite o segundo número: "));

    let soma = num1 + num2;
    alert("O resultado da soma entre " + num1 + " + " + num2 + " será " + soma);
}

function exercicio002(){
    let num1 = Number(prompt("Digite o primeiro número: "));
    let num2 = Number(prompt("Digite o segundo número: "));
    
    let media = (num1+num2)/2
    alert("O resultado da média entre " + num1 + " + " + num2 + " será " + media);   
}

function exercicio003(){
    let nomeUsuario = prompt("Qual é o seu nome?");
    alert("Olá, " + nomeUsuario + "! Seja bem vindo!")
}

function exercicio004(){
    let temperaturaCelsius = Number(prompt("Digite o grau em Celsius!"));
    let temperaturaFahrenheit = (temperaturaCelsius * (9/5)) + 32;
    alert("A temperatura convertida será " + temperaturaFahrenheit + " graus Fahrenheit!")
}

function exercicio005(){
    let nota1 = Number(prompt("Digite sua primeira nota"));
    let nota2 = Number(prompt("Digite sua segunda nota"));
    let nota3 = Number(prompt("Digite sua terceira nota"));

    let media = (nota1 + nota2 + nota3) / 3
    media = media.toFixed(2) 

    alert("A média das notas será: " + media)
}

function exercicio006(){
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

function exercicio007(){
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

function exercicio008(){
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

//     let personagem1 = "Parabéns seu personagem é: Ahsoka, com as habilidades de liderança e combate com dois sabres de luz"
//     let personagem2 = "Parabéns seu personagem é: Grogu, com o poder da telecinese"
//     let personagem3 = "Parabéns seu personagem é: Mandaloriano, com de treinamento de guerrilheiro e habilidade com armamentos"
//     let personagem4 = "Parabéns seu personagem é: Darth vader, com o domínio do lado sombrio e resistência física"
//     let personagem5 = "Parabéns seu personagem é: Padmé, com a habilidade de negociar e unir facções"
//     let personagem6 = "Parabéns seu personagem é: Luke, com o domínio completo da força!"
//     let personagem7 = "Parabéns seu personagem é: Leia, com o uso de blaster e táticas de guerrilha."
//     let personagem8 = "Parabéns seu personagem é: Han Solo, com as habilidade de naves e sistemas."
//     let personagem9 = "Parabéns seu personagem é: Palpatine, com as habilidades de mestre sith e manipulação."
//     let personagem10 = "Parabéns seu personagem é: R2D2, com as habilidades de invadir sistemas imperiais"

    let personagemAleatorio = Math.floor(Math.random() * (10 - 1) + 1);
    alert(personagens[personagemAleatorio]);

//     switch(personagemAleatorio){
//         case 1:
//             alert(personagem1);
//             break;
//         case 2:
//             alert(personagem2);
//             break;
//         case 3:
//             alert(personagem3);
//             break;
//         case 4:
//             alert(personagem4);
//             break;
//         case 5:
//             alert(personagem5);
//             break;
//         case 6:
//             alert(personagem6);
//             break;
//         case 7:
//             alert(personagem7);
//             break;
//         case 8:
//             alert(personagem8);
//             break;
//         case 9:
//             alert(personagem9);
//             break;
//         case 10:
//             alert(personagem10);
//         break;
//     }
}

function exercicio009(){
    let signoUsuario;

    function checkSign(signoUsuario){
        signoUsuario = prompt("Digite seu signo!")

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

function exercicio010(){
    
}