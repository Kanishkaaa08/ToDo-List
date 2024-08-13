const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', addTodo);
todoList.addEventListener('click', handleTodoClick);

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        todoInput.value = '';
    }
}

function handleTodoClick(event) {
    if (event.target.tagName === 'BUTTON') {
        const li = event.target.parentElement;
        todoList.removeChild(li);
    } else {
        event.target.classList.toggle('completed');
    }
}
