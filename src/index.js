import './style.css';
import loadTodos from './todoCrud.js';
// import Todo from './Todo.js';

// populateTodoList(Todo.getAllTodos(), todoContainer);

window.addEventListener('DOMContentLoaded', () => {
  loadTodos();
});