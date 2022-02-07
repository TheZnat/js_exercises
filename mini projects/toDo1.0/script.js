
let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');
input.value = "";




priority.onclick = function () {
    priority.classList.toggle('is-important');
    if (priority.classList.contains('is-important')) {
        priority.textContent = 'Важная задача';
    } else {
        priority.textContent = 'Обычная задача';
    }
}

form.onsubmit = function (evt) {
    evt.preventDefault('');
    let newTaskToDo = document.createElement('li');
    if (priority.textContent === 'Важная задача'){
        newTaskToDo.classList.add('is-important');
    }
    newTaskToDo.textContent = input.value;

    list.append(newTaskToDo);
}