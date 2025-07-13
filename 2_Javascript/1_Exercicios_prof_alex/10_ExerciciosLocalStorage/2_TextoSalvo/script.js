/* 2. Texto Salvo
Crie um <textarea> onde o texto digitado seja salvo
automaticamente no localStorage a cada digitação. Ao
recarregar a página, o texto deve reaparecer.*/

let area = document.getElementById('texto');
area.value = localStorage.getItem('bloco') || '';

area.addEventListener('input', function () {
    localStorage.setItem('bloco', area.value);
});
