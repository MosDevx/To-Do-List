import './style.css';

import Todo from './Todo.js';

const todoContainer = document.getElementById('todo-container');

const todoSorter = (a, b) => (a.index - b.index);

const createTodoItem = (todo) => {
  const parentList = document.createElement('li');
  parentList.classList.add('todo-item');
  parentList.dataset.id = todo.index;

  const completedCheckbox = document.createElement('INPUT');
  completedCheckbox.setAttribute('type', 'checkbox');
  completedCheckbox.checked = todo.isCompleted;
  completedCheckbox.classList.add('todo-checkbox');
  parentList.appendChild(completedCheckbox);

  const todoInput = document.createElement('INPUT');
  todoInput.setAttribute('type', 'input');
  todoInput.setAttribute('readonly', true);
  todoInput.setAttribute('value', todo.task);
  todoInput.classList.add('todo-input');

  todoInput.addEventListener('click',()=>{
    todoInput.removeAttribute('readonly');
    console.log("input clicked");

  })

  todoInput.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
      console.log("Hey")
      e.preventDefault()
      let newTask = todoInput.value;
      todo.updateTodo(newTask)
      console.log(todoInput.value);
      todoInput.setAttribute('readonly', true);
      todoInput.blur()
      console.log(Todo.getAllTodos())
    }
  })


  parentList.appendChild(todoInput);

  const deleteButton = document.createElement('button');
  const menuIcon = document.createElement('i');
  menuIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');
  deleteButton.appendChild(menuIcon);
  deleteButton.addEventListener('click', () => {
    todo.deleteTodo();
    const mainContainer = parentList.parentNode;
    mainContainer.removeChild(parentList);
  });
  parentList.appendChild(deleteButton);

  return parentList;
};

const populateTodoList = (todoArray, todoContainer) => {
  todoArray.sort(todoSorter);
  todoArray.forEach((todo) => {
    const todoItem = createTodoItem(todo);
    todoContainer.appendChild(todoItem);
  });
};

const todo1 = new Todo('abc');
const todo2 = new Todo('def');
const todo3 = new Todo('ijk');

populateTodoList(Todo.getAllTodos(), todoContainer);