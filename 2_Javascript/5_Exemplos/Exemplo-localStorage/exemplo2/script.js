const usuario = {
    nome: 'Emily',
    idade: 20
}

const endereco = 'Floripa';
localStorage.setItem("endereco" , endereco)
localStorage.setItem('usuario', JSON.stringify(usuario));

// console.log(localStorage.getItem('endereco'))
// console.log(JSON.parse(localStorage.getItem('usuario')));

const usuarioLocalStorage = JSON.parse(localStorage.getItem('endereco'));
console.log(usuarioLocalStorage.nome)