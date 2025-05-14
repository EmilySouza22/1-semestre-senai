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