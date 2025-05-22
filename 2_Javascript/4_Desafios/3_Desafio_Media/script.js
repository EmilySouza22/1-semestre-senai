function mediaPonderada(){

    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = parseFloat(document.getElementById('n3').value);
    let n4 = parseFloat(document.getElementById('n4').value);

    let p1 = parseFloat(document.getElementById('p1').value);
    let p2 = parseFloat(document.getElementById('p2').value);
    let p3 = parseFloat(document.getElementById('p3').value);
    let p4 = parseFloat(document.getElementById('p4').value);

    let resultado = document.getElementById('resultado');

    const resultadoMedia = ((n1 * p1) + (n2 * p2) + (n3 * p3) + (n4 * p4)) / (p1 + p2 + p3 + p4)

    resultado.innerHTML = `Resultado: ${resultadoMedia}`

}