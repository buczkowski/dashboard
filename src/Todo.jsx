import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import { MdNoteAdd } from "react-icons/md";

function Todo() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('todoListStorage')) || []
  );

  useEffect(() => {
    localStorage.setItem('todoListStorage', JSON.stringify(items));
  }, [items]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="widget">
      <h1><MdNoteAdd className="react-icons"/> To Do</h1>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;