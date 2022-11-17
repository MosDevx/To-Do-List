class Todo {
  static todoArray =[]

  static storageUpdater;

  static setUpdater(value) {
    Todo.storageUpdater = value;
  }

  constructor(task, isCompleted = false) {
    this.task = task;
    this.isCompleted = isCompleted;
    this.index = null;

    Todo.todoArray.push(this);
    Todo.recalculateIndex();

    if (typeof Todo.storageUpdater === 'function') {
      Todo.storageUpdater();
    }
  }

  changeStatus(status) {
    const i = Todo.todoArray.indexOf(this);
    const todo = Todo.todoArray[i];
    todo.isCompleted = status;

    if (typeof Todo.storageUpdater === 'function') {
      Todo.storageUpdater();
    }
  }

  deleteTodo() {
    const i = Todo.todoArray.indexOf(this);
    Todo.todoArray.splice(i, 1);
    Todo.recalculateIndex();
    if (typeof Todo.storageUpdater === 'function') {
      Todo.storageUpdater();
    }
  }

  updateTodo(newTask) {
    const i = Todo.todoArray.indexOf(this);
    const todo = Todo.todoArray[i];
    todo.task = newTask;
    if (typeof Todo.storageUpdater === 'function') {
      Todo.storageUpdater();
    }
  }

  static getAllTodos() {
    return Todo.todoArray;
  }

  static recalculateIndex() {
    Todo.todoArray.forEach((todo, index) => {
      todo.index = index;
    });
  }

  static updateTodosArray(dataSource) {
    if (dataSource?.length) {
      const newArray = dataSource.map((rawTodo) => {
        const todo = new Todo(rawTodo.task, rawTodo.isCompleted);
        return todo;
      });

      Todo.todoArray = [];
      Todo.todoArray.push(...newArray);
    }
  }

  static clearCompleted() {
    const newArray = Todo.todoArray.filter((todo) => (todo.isCompleted === false));
    Todo.todoArray = newArray;
    Todo.recalculateIndex();
    if (typeof Todo.storageUpdater === 'function') {
      Todo.storageUpdater();
    }
  }
}

export default Todo;