inicializar()

let usuarios = []

let nomesTeste = ["Usuario 1", "Usuario 2", ]

function cadastrar(){

    let usuario = {
        nome: document.getElementById('inpCadNome').value,
        email: document.getElementById('inpCadEmail').value,
        senha: document.getElementById('inpCadSenha').value
    }

    usuarios.push(usuario)
    limparInputs()
    mostrarLogin()

    alert("Cadastrado com sucesso!! :D")

    console.log(usuarios)
    
}

function logar(){
    let nome = document.getElementById('inpLogNome').value
    let senha = document.getElementById('inpLogSenha').value

    if((nome === usuario.nome || nome === usuario.email) && senha === usuario.senha){
        alert("Login efetuado com sucesso!")
        limparInputs()
        mostrarProdutos()
        // document.getElementById('navbar').style.display = 'block'
    }else{
        alert("Login não efetuado sem sucesso!")
    }
}



function mostrarLogin(){
    esconderTodas()
    document.getElementById('login').style.display = 'flex'
    document.getElementById('inpLogNome').focus()

}
function mostrarCadastro(){
    esconderTodas()
    document.getElementById('cadastro').style.display = 'flex'
    document.getElementById('inpCadNome').focus()
}

function mostrarProdutos(){
    esconderTodas()
    document.getElementById('produtos').style.display = 'flex'
    document.getElementById('navbar').style.display = 'flex'
}


function esconderTodas(){
    document.getElementById('login').style.display = 'none'
    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('produtos').style.display = 'none'
    // esconder novas páginas
}


function limparInputs(){
    document.getElementById('inpCadNome').value = ''
    document.getElementById('inpCadEmail').value = ''
    document.getElementById('inpCadSenha').value = ''

    document.getElementById('inpLogNome').value = ''
    document.getElementById('inpLogSenha').value = ''
}

function inicializar(){
    mostrarLogin()

}