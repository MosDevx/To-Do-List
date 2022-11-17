import Todo from '../TodoClass.js';

describe('Test add functionality', () => {
  test('Add 1 todo Item', () => {
    const todo = new Todo('Make tests for this!!');
    expect(Todo.getAllTodos().length).toBe(1);
    todo.deleteTodo();
  });
});

describe('Test remove functionality', () => {
  test('Remove selected Item', () => {
    const todo = new Todo('Make tests for this!');
    todo.deleteTodo();
    expect(Todo.getAllTodos().length).toBe(0);
  });
});
