import './style.css';
import initializeTodos from './Todo.js';
import loadTodos from './todoCrud.js';
// import Todo from './Todo.js';

// populateTodoList(Todo.getAllTodos(), todoContainer);

window.addEventListener('DOMContentLoaded', () => {
  initializeTodos();
  loadTodos();
});