function chamarCadastro(){
    document.getElementById("container_cadastro").style.display = "flex"
    document.getElementById("container_principal").style.display = "none"
}

function chamarVoltar(){
    document.getElementById("container_cadastro").style.display = "none"
    document.getElementById("container_principal").style.display = "flex"
}

function adicionarItem(){
    let itemAdicionar = document.getElementById("nome").value;
    let lista = document.getElementById("minhaLista");
    let li = document.createElement("li");
    let conteudo = `<li> ${itemAdicionar} <img src="img/pencil.svg" alt="ícone de pincel" class="editar"> <img src="img/trash.svg" alt="ícone de lixeira" class="deletar"> </li>`
    li.innerHTML = conteudo;
    lista.appendChild(li);
}

