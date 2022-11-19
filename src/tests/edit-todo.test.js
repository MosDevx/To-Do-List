import Todo from '../TodoClass.js';
import createTodoItem from '../CreateTodoItem.js';

describe('Test for edit functionality', () => {
  test('Edit todo item', () => {
    const todo = new Todo('Make tests for this!!');
    todo.updateTodo('Changes made');
    expect(todo.task).toBe('Changes made');
    // const todoNode = createTodoItem(todo);
  });

  test('Edit todo item in html', () => {
    document.body.innerHTML = `
    <ul class id="todo-container">

    </ul>
    `;
    const todo = new Todo('Make tests for this!!');
    const todoNode = createTodoItem(todo);
    const todoContainer = document.getElementById('todo-container');
    todoContainer.appendChild(todoNode);
    const inputField = document.querySelector('.todo-input');
    inputField.value = 'New Stuff';
    expect(inputField.value).toBe('New Stuff');
  });
});