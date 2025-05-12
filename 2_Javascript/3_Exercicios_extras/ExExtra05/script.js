/*
5. Caso o objeto não contenha erro, confira se o acesso é
permitido, se for permitido exiba "login: mundojs"
senão escreva "acesso negado" caso de erro, 
exiba a mensagem de erro
*/

let objetoServidor = {
    acesso: true,
    login: "mundojs"
};

let objetoServidor2 = {
    erro: "Erro ao conectar ao servidor"
};

function conexaoLogin(respostaDoServidor) {
    if(respostaDoServidor.erro == null) {
        if(respostaDoServidor.acesso){
            console.log(respostaDoServidor.login)
        }else{
            console.log("acesso negado!")
        }
    }else{
        console.log(respostaDoServidor.erro)
    }
}
conexaoLogin(objetoServidor);
conexaoLogin(objetoServidor2);