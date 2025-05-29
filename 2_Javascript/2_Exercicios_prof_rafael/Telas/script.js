function mostrarLogin(){
    esconderTodas()
    document.getElementById('login').style.display = 'flex'
}

function mostrarCadastro(){
    esconderTodas()
    document.getElementById('cadastro').style.display = 'flex'
}

function mostrarProdutos(){
    esconderTodas()
    document.getElementById('produtos').style.display = 'flex'
}

function esconderTodas(){
    document.getElementById('login').style.display = 'none'
    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('produtos').style.display = 'none'
}
