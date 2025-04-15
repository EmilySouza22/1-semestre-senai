/*
30. Só desbloqueia o celular se o código digitado for exatamente "1234".

let codigoDigitado;

Use if para verificar.
*/
let codigoDigitado = prompt("Digite o código do celular:")

if(codigoDigitado === '1234'){
    console.log("Acesso permitido")
}else{
    console.log("Acesso negado")
}