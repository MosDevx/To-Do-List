import Todo from '../TodoClass.js';

describe('Test add functionality', () => {
  test('Add 1 todo Item', () => {
    const todo = new Todo('Make tests for this!!');
    expect(Todo.getAllTodos().length).toBe(1);
    todo.deleteTodo();
  });
});

