class Todo {
  static todoArray =[]

  static storageUpdater;

  static setUpdater(value) {
    Todo.storageUpdater = value;
  }

  constructor(task) {
    this.task = task;
    this.isCompleted = false;
    this.index = null;

    Todo.todoArray.push(this);
    Todo.recalculateIndex();

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
        const todo = new Todo(rawTodo.task);
        return todo;
      });

      Todo.todoArray = [];
      Todo.todoArray.push(...newArray);
    }
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

const storeTodosToStorage = () => {
  const booksString = JSON.stringify(Todo.getAllTodos());
  window.localStorage.setItem('TodoData', booksString);
};

Todo.setUpdater(storeTodosToStorage);

Todo.updateTodosArray(JSON.parse(window.localStorage.getItem('TodoData')));

export default Todo;