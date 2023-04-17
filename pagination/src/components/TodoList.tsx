import React from "react";
import { useState } from "react";

const TodoList = ({ todos }) => {
  const [curPage, setCurPage] = useState<number>(1);
  const [itemsToShow, setItemsToShow] = useState(10);
  const totalItems = todos.length;
  const lastNumber = curPage * itemsToShow;
  const offsetNumber = lastNumber - itemsToShow;
  const visibleItems = [...todos].slice(offsetNumber, lastNumber);
  const totalPages = Math.ceil(totalItems / itemsToShow);
  const pages = [...Array(totalPages + 1).keys()].slice(1);

  return (
    <>
      <ul className='todo-list'>
        {visibleItems.map((todo, idx) => (
          <li key={`todo-${idx}`} className={todo.completed ? "completed" : ""}>
            <span>#{todo.id}</span> {todo.title}
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
        ))}{" "}
        <button
          onClick={(e) => setCurPage(curPage + 1)}
          disabled={curPage === totalPages ? true : false}>
          &gt;
        </button>
      </div>
    </>
  );
};
// <input type='checkbox' checked={todo.completed} />
export default TodoList;
