import Todo from './TodoClass.js';
import { addAllEventListeners } from './todoCrud.js';

const storeTodosToStorage = () => {
  const booksString = JSON.stringify(Todo.getAllTodos());
  window.localStorage.setItem('TodoData', booksString);
};

const initializeTodos = () => {
  Todo.setUpdater(storeTodosToStorage);

  Todo.updateTodosArray(JSON.parse(window.localStorage.getItem('TodoData')));

  addAllEventListeners();
};

export default initializeTodos;