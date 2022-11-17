import Todo from './TodoClass.js';

const storeTodosToStorage = () => {
  const booksString = JSON.stringify(Todo.getAllTodos());
  window.localStorage.setItem('TodoData', booksString);
};

Todo.setUpdater(storeTodosToStorage);

Todo.updateTodosArray(JSON.parse(window.localStorage.getItem('TodoData')));

export default Todo;