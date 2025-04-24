/*

Ex50. Horóscopo Interativo

Descrição: Mostra uma previsão aleatória com base no signo do usuário.

Entradas: Seleção do signo (ex: "Leão").

Exemplo de Saída: "Hoje é um ótimo dia para buscar novos desafios, Leão!"

*/
function checkSign(signoUsuario){
    switch(signoUsuario){
        case "áries", "aries", "Áries":
            alert("Áries, esta semana sua comunicação tá ON! Ótimo pra passar em entrevistas de emprego!")
            break;
    
        case "touro", "Touro":
            alert("Touro, esta semana você está mais perto de realizar um sonho ou plano!")
            break;
    
        case "gêmeos", "gemeos", "Gêmeos":
            alert("Gêmeos, nesta semana você pode ir de 8 a 80, tome cuidado com a teimosia!")
            break;
    
        case "câncer", "cancer", "Câncer":
            alert("Câncer, nesta semana viagens tendem a elevar seu espírito, mas trazem desafios!")
            break;
    
        case "leão", "leao", "Leão":
            alert("Leão, nesta semana seu esforço tende a ser reconhecido e você deve conseguir estabilidade.")
            break;
    
        case "virgem", "Virgem":
            alert("Virgem, nesta semana você terá novos horizontes e boas mudanças a caminho!")
            break;
    
        case "libra", "Libra":
            alert("Libra, nesta semana com mente ágil e papo direto, pode fazer bons acordos e parcerias pra você.")
            break;
    
        case "escorpião":
        case "escorpiao":
        case "Escorpião":
            alert("Escorpião, nesta semana aproveite a energia em alta e exercite-se")
            break;
    
        case "sagitário", "sagitario", "Sagitário":
            alert("Sagitário, nesta semana você tem tudo pra se divertir, experimentar coisas novas e até viajar.")
            break;
    
        case "capricórnio", "capricornio", "Capricórnio":
            alert("Capricórnio, nesta semana mostrando maior empatia, pode se dar bem com clientes, comércio ou entrevista.")
            break;
    
        case "aquário", "aquario", "Aquário":
            alert("Aquário, nesta semana tem tudo pra mostrar grandes ideias e fazer novos contatos, mas cuidado pra não se posicionar com agressividade.")
            break;
    
        case "peixes", "Peixes":
            alert("Peixes, nesta semana não deve faltar energia, criatividade e iniciativa para dar cabo das tarefas ")
            break;
    
        default:
            alert("Signo inválido!")
            break;
    }
}
