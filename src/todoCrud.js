import Todo from './TodoClass.js';
import createTodoItem from './CreateTodoItem.js';

const todoContainer = document.getElementById('todo-container');
const newTodoInput = document.getElementById('new-todo-input');
const addButton = document.getElementById('add-button');

const todoSorter = (a, b) => (a.index - b.index);

const populateTodoList = (todoArray, todoContainer) => {
  todoArray.sort(todoSorter);
  todoArray.forEach((todo) => {
    const todoItem = createTodoItem(todo);
    todoContainer.appendChild(todoItem);
  });
};

const clearCompletedButton = document.getElementById('clear-completed-button');

const clearTodos = () => {
  Todo.clearCompleted();
  todoContainer.innerHTML = '';
  populateTodoList(Todo.getAllTodos(), todoContainer);
};

const addAllEventListeners = () => {
  // Field for creating new Todo
  newTodoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const task = newTodoInput.value;
      const newTodo = new Todo(task);
      const newTodoItem = createTodoItem(newTodo);
      todoContainer.appendChild(newTodoItem);
      newTodoInput.value = '';
      newTodoInput.blur();
    }
  });

  // button for adding a ew Todo to the todo list
  addButton.addEventListener('click', (e) => {
    if (newTodoInput.value !== '') {
      e.preventDefault();
      const task = newTodoInput.value;
      const newTodo = new Todo(task);
      const newTodoItem = createTodoItem(newTodo);
      todoContainer.appendChild(newTodoItem);
      newTodoInput.value = '';
      newTodoInput.blur();
    }
  });
  clearCompletedButton.addEventListener('click', clearTodos);
};

export default function loadTodos() {
  populateTodoList(Todo.getAllTodos(), todoContainer);
}

export { clearTodos, addAllEventListeners };
