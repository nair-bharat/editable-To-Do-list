import ReactDOM from "react-dom/client";
import Item from "./src/components/Item";
import { useRef, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTodos([
        ...todos,
        { text: e.target.value, completed: false, id: Date.now() },
      ]);
      inputRef.current.value = "";
    }
  };

  const handleCompleted = (id) => {
    const updatedList = todos.map((e) => {
      if (e.id === id) {
        e.completed = !e.completed;
      }
      return e;
    });
    setTodos(updatedList);
  };

  const handleDelete = (id) => {
    const filter = todos.filter((e) => e.id !== id);
    setTodos(filter);
  };

  const handleText = (id, text) => {
    const updatedList = todos.map((e) => {
      if (e.id === id) {
        e.text = text;
      }
      return e;
    });
    setTodos(updatedList);
  };

  return (
    <div className="App">
      {console.log(todos)}
      <div>Editable to-do List</div>
      <input type="text" onKeyPress={handleKeyPress} ref={inputRef} />
      {todos.map((e) => (
        <Item
          {...e}
          key={e.id}
          updateCompleted={handleCompleted}
          deleteTodo={handleDelete}
          updateText={handleText}
        />
      ))}

      {/*
      ----------- testing ------- 
      <Item text={"do the homework"} />
      <Item text={"go fishing"} />
      */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
