// jest.mock('../clearTodos')

import Todo from '../TodoClass.js';
// import { clearTodos } from '../todoCrud.js';
import createTodoItem from '../CreateTodoItem.js';

describe('Test clear button ', () => {
  test('Make test for clear button', () => {
    document.body.innerHTML = `  
        <ul class id="todo-container">

        </ul>
        <button id="clear-button"> 
        </button>
       `;
    const todo = new Todo('Make tests for this!!');
    const todoNode = createTodoItem(todo);
    const todoContainer = document.getElementById('todo-container');
    todoContainer.appendChild(todoNode);
    const todoCheckbox = document.querySelector('.todo-checkbox');
    todoCheckbox.click();
    const todoButton = document.getElementById('clear-button');

    const clearTodos = jest.fn(() => {
      Todo.clearCompleted();
      todoContainer.innerHTML = '';
    });

    todoButton.addEventListener('click', clearTodos);
    // console.log('completed', todo.isCompleted);
    todoButton.click();
    expect(todoContainer.childElementCount).toBe(0);
  });
});