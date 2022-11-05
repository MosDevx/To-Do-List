class Todo {
  static todoArray =[]

  constructor(task) {
    this.task = task;
    this.isCompleted = false;
    this.index = null;

    Todo.todoArray.push(this);
    Todo.recalculateIndex();
  }

  deleteTodo() {
    
    const i = Todo.todoArray.indexOf(this);
    Todo.todoArray.splice(i, 1);
    Todo.recalculateIndex();
  }

  updateTodo(newTask) {
    const i = Todo.todoArray.indexOf(this);
    const todo = Todo.todoArray[i];
    todo.task = newTask;
  }

  static getAllTodos() {
    return Todo.todoArray;
  }

  static recalculateIndex() {
    Todo.todoArray.forEach((todo, index) => {
      todo.index = index;
    });
  }
}

// const todo1 = new Todo('abc');
// const todo2 = new Todo('def');
// const todo3 = new Todo('ijk');

// console.log(Todo.getAllTodos());
// todo2.deleteTodo()
// const todo4 = new Todo('lmn');
// todo4.updateTodo("Just did it")
// console.log(Todo.getAllTodos());

export default Todo;