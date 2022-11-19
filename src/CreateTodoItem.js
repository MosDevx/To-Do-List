const createTodoItem = (todo) => {
  const parentList = document.createElement('li');
  parentList.classList.add('todo-item');
  parentList.dataset.id = todo.index;

  const completedCheckbox = document.createElement('INPUT');
  completedCheckbox.setAttribute('type', 'checkbox');
  completedCheckbox.checked = todo.isCompleted;
  completedCheckbox.classList.add('todo-checkbox');
  parentList.appendChild(completedCheckbox);

  completedCheckbox.addEventListener('change', (e) => {
    todo.changeStatus(e.target.checked);
  });

  const todoInput = document.createElement('INPUT');
  todoInput.setAttribute('type', 'input');
  todoInput.setAttribute('readonly', true);
  todoInput.setAttribute('value', todo.task);
  todoInput.classList.add('todo-input');

  todoInput.addEventListener('click', () => {
    todoInput.removeAttribute('readonly');
  });

  todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newTask = todoInput.value;
      todo.updateTodo(newTask);
      todoInput.setAttribute('readonly', true);
      todoInput.blur();
    }
  });

  todoInput.addEventListener('blur', () => {
    const newTask = todoInput.value;
    todo.updateTodo(newTask);
    todoInput.setAttribute('readonly', true);
  });
  parentList.appendChild(todoInput);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('button');

  // const menuIcon = document.createElement('i');
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fa-solid', 'fa-trash');
  // menuIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');

  deleteButton.appendChild(deleteIcon);

  deleteButton.addEventListener('click', () => {
    todo.deleteTodo();
    const mainContainer = parentList.parentNode;
    mainContainer.removeChild(parentList);
  });
  parentList.appendChild(deleteButton);

  return parentList;
};

export default createTodoItem;