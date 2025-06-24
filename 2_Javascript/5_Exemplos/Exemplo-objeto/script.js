// literal
let meuobjeto = {}
let meuobjetovalorpadrao = {nome:"alex", idade:22}

// atribuição direta
meuobjeto.nome = "Alex"
meuobjeto.idade = 22

// utilizando new object
let obj = new Object()

// propiedades e metodos
let aluno = {nome: "Alex", apresentar: function(){ return `Olá meu nome é: ${this.nome}`}}

// acessando e modificando
let objeto = {nome:"Gol", "numero-chassi": 2345334 }
objeto.nome = "Editei"
objeto["numero-chassi"] = 3423423

// metodo de edição em listas
let pessoas = [{
    nome: "Alex", 
    apresentar() { 
        console.log(`Olá meu nome é: ${this.nome}`);
    }, 
    editar() {
        let novonome = prompt("Digite um novo nome");
        this.nome = novonome;
    }
},
{
    nome: "João", 
    apresentar() { 
        console.log(`Olá meu nome é: ${this.nome}`);
    }, 
    editar() {
        let novonome = prompt("Digite um novo nome");
        this.nome = novonome;
    }
}];

let minhadiv = document.getElementById("pessoas");

pessoas.forEach((pessoa) => {
    let div = document.createElement("div");
    div.className = "pessoa";

    let p = document.createElement("p");
    p.textContent = pessoa.nome;

    let btnMostrar = document.createElement("button");
    btnMostrar.textContent = "Mostrar";
    btnMostrar.onclick = () => pessoa.apresentar();

    let btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.onclick = () => pessoa.editar();

    div.append(p, btnMostrar, btnEditar);
    minhadiv.appendChild(div);
});