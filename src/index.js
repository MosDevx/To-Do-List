import './style.css';

const todoContainer = document.getElementById('todo-container');

const todoArray = [{ index: 3, isCompleted: false, task: 'Do ABC' }, { index: 1, isCompleted: false, task: 'Do DEF' }, { index: 2, isCompleted: false, task: 'Do GHI' }];

const todoSorter = (a, b) => (a.index - b.index);

const createTodoItem = ({ index, isCompleted, task }) => {
  const parentList = document.createElement('li');
	parentList.classList.add("todo-item")
  parentList.dataset.id = index;

  const completedCheckbox = document.createElement('INPUT');
  completedCheckbox.setAttribute('type', 'checkbox');
  completedCheckbox.setAttribute('checked', isCompleted);
	completedCheckbox.classList.add('todo-checkbox')
  parentList.appendChild(completedCheckbox);

  const todoInput = document.createElement('INPUT');
  todoInput.setAttribute('type', 'input');
  todoInput.setAttribute('readonly', true);
  todoInput.setAttribute('value', task);
	todoInput.classList.add("todo-input")
  parentList.appendChild(todoInput);

  const menuIcon = document.createElement('i');
  menuIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');
  parentList.appendChild(menuIcon);

  return parentList;
};

const populateTodoList = (todoArray, todoContainer) => {
  todoArray.sort(todoSorter);
  todoArray.forEach((todo) => {
    const todoItem = createTodoItem(todo);
    todoContainer.appendChild(todoItem);
  });
};

populateTodoList(todoArray, todoContainer);