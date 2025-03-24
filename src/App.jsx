import React from "react";
import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistdata(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodo(newTodo) {
    if (newTodo.trim() === "") {
      alert("Field is empty! Please enter a task.");
      return;
    }
    const newtodolist = [...todos, newTodo];
    setTodos(newtodolist);
    persistdata(newtodolist)
  
  }
  function handleDelete(index) {
    const newtodolist = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newtodolist);
    persistdata(newtodolist)
  }

  function handleledit(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDelete(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localtodos = localStorage.getItem("todos");
    if (!localtodos) {
      return;
    }
    localtodos = JSON.parse(localtodos).todos;
    setTodos(localtodos);
  }, []);
  return (
    <main>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        handleledit={handleledit}
        handleDelete={handleDelete}
        todos={todos}
      />
    </main>
  );
}

export default App;
