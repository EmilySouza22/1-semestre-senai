//dado o seguinte objeto:

let endereco = {
    rua: 'Rua dos pinheiros',
    numero: 1293,
    bairro: 'Centro',
    cidade: 'São Paulo',
    uf: 'SP'
};

//tenho que retornar: O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.

function concatenaEndereco(){
    console.log('O usuário mora em ' + endereco.rua + ' / ' + 
        endereco.uf + ' no bairro ' + endereco.bairro + ', na rua ' + 
        endereco.rua + 'com nº ' + endereco.numero + '.'
    )
}

concatenaEndereco();