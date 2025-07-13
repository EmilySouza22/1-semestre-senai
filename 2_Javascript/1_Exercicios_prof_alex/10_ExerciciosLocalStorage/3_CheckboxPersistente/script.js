/* 3. Checkbox Persistente
Faça uma lista de tarefas com checkboxes. Ao marcar uma
tarefa como feita, essa informação deve ser salva no
localStorage. */

let tarefas = ['t1', 't2', 't3'];

tarefas.forEach(function (id) {
    let checkbox = document.getElementById(id);
    let salvo = localStorage.getItem(id);
    checkbox.checked = salvo === 'true';

    checkbox.addEventListener('change', function () {
        localStorage.setItem(id, checkbox.checked);
    });
});
