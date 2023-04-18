import React from "react";
import { useState } from "react";

interface todoProps {
  todos: {
    map(arg0: (item: any) => any): unknown;
    slice(offsetNumber: number, lastNumber: number): unknown;
    length: any;
    title: string;
    id: number;
    completed: boolean;
    userID: number;
  };
  change: any;
}
const TodoList = ({ todos, change }: todoProps) => {
  const [curPage, setCurPage] = useState<number>(1);
  const [itemsToShow, setItemsToShow] = useState(10);
  const totalItems = todos.length;
  const lastNumber = curPage * itemsToShow;
  const offsetNumber = lastNumber - itemsToShow;
  const visibleItems = todos.slice(offsetNumber, lastNumber);
  const totalPages = Math.ceil(totalItems / itemsToShow);
  const pages = [...Array(totalPages + 1).keys()].slice(1);
  // console.log(visibleItems);
  const handleChange = (id: number) => {
    // loop through items to find the id (JavaScript really needs to sort this out)
    let newTodos = todos.map((item) => {
      if (item.id === id) {
        // this is the one - toggle completed state
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    // call parent function to set state
    change(newTodos);
  };
  return (
    <>
      <ul className='todo-list'>
        {visibleItems.map((todo: string | number | Boolean, idx: number) => (
          <li key={`todo-${idx}`} className={todo.completed ? "completed" : ""}>
            <span>#{todo.id}</span>
            <label htmlFor={`todo-${idx}`}>{todo.title}</label>

            <input
              id={`todo-${idx}`}
              type='checkbox'
              checked={todo.completed}
              onChange={(e) => handleChange(todo.id)}
            />
          </li>
        ))}
      </ul>
      <div className='pagination'>
        <button
          onClick={(e) => setCurPage(curPage - 1)}
          disabled={curPage < 2 ? true : false}>
          {" "}
          &lt;
        </button>
        {pages.map((num: number, idx: number) => (
          <button
            key={num}
            className={num === curPage ? "current" : ""}
            onClick={(e) => setCurPage(num)}>
            {num}
          </button>
        ))}
        <button
          onClick={(e) => setCurPage(curPage + 1)}
          disabled={curPage === totalPages ? true : false}>
          &gt;
        </button>
      </div>
    </>
  );
};
//
export default TodoList;
