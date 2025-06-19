import { useState } from "react";
import "./App.css";
function TodoListItem({ todo, description }) {
  return (
    <div className="todo-list-item">
      <p>{todo}</p>
      <p>{description}</p>
    </div>
  );
}
function App() {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const [todoListItems, setTodoListItems] = useState([]);

  function handleChangeTodo(ev) {
    setTodo(ev.target.value);
  }

  function handleChangeDescription(ev) {
    setDescription(ev.target.value);
  }

  function handleAddTodo(ev) {
    ev.preventDefault();
    const newTodo = {
      todo: todo,
      description: description,
    };
    setTodoListItems(function (prevTodoListItems) {
      return [...prevTodoListItems, newTodo];
    });
    setTodo("")
    setDescription("")
  }

  return (
    <div className="app">
      <h1 className="title">TODO LIST</h1>

      <form>
        <input
          type="text"
          placeholder="todo"
          className="form-input"
          value={todo}
          onChange={handleChangeTodo}
        />
        <input
          type="text"
          placeholder="description"
          className="form-input"
          value={description}
          onChange={handleChangeDescription}
        />
        {/* <input type="text" placeholder="task" className="form-input" /> */}
        <button onClick={handleAddTodo}>Add Task</button>
      </form>

      <div>
        {todoListItems.map((todo, idx) => (
          <TodoListItem
            key={idx}
            todo={todo.todo}
            description={todo.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
