function soma(){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);

    let p = document.getElementById("resultado");

    resultado = n1 + n2;
    p.innerText = "Resultado: " + resultado;
}


