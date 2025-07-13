/* 1. Contador Persistente
Crie um contador com botões “+” e “−”. O número deve ser
salvo no localStorage e restaurado ao recarregar a página. */

let valor = localStorage.getItem('contador');

if (valor === null) {
    valor = 0;
} else {
    valor = Number(valor);
}

let elementoValor = document.getElementById('valor');
elementoValor.textContent = valor;

document.getElementById('mais').addEventListener('click', function () {
    valor++;
    elementoValor.textContent = valor;
    localStorage.setItem('contador', valor);
});

document.getElementById('menos').addEventListener('click', function () {
    valor--;
    elementoValor.textContent = valor;
    localStorage.setItem('contador', valor);
});
