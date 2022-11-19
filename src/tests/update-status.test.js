import Todo from '../TodoClass.js';
import createTodoItem from '../CreateTodoItem.js';

describe('Make test for status of completed ', () => {
  test('Update todo items status', () => {
    const todo = new Todo('Make tests for this!!');
    todo.changeStatus(true);
    expect(todo.isCompleted).toBe(true);
    // const todoNode = createTodoItem(todo);
  });

  test('Update todo items status in Html', () => {
    document.body.innerHTML = `  
        <ul class id="todo-container">

        </ul>
       `;
    const todo = new Todo('Make tests for this!!');
    const todoNode = createTodoItem(todo);
    const todoContainer = document.getElementById('todo-container');
    todoContainer.appendChild(todoNode);
    const todoCheckbox = document.querySelector('.todo-checkbox');
    todoCheckbox.click();
    expect(todo.isCompleted).toBe(true);
  });
});