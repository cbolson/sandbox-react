import { useState } from "react";
import "./App.css";

function App() {
  const [cells, setCells] = useState(["a", "b", "c"]);

  // update cell value in array
  function updateCellValue(newVal, idx) {
    setCells((prevCells) =>
      prevCells.map((cell, i) => (i === idx ? newVal : cell))
    );
  }

  // add new cell after idx sent
  function addNewCell(idx) {
    let pos = idx + 1;
    console.log(pos);
    setCells((prevCells) => [
      ...prevCells.slice(0, pos),
      "",
      ...prevCells.slice(pos),
    ]);
  }
  return (
    <>
      <main>
        <h1>Array update</h1>
        <ol>
          <li>Add new cells</li>
          <li>Update cell content</li>
        </ol>
        <ul className='cells'>
          {cells.map((cell, idx) => (
            <li key={idx}>
              <input
                type='text'
                className='cell'
                value={cell}
                placeholder='type here'
                onChange={(e) => updateCellValue(e.currentTarget.value, idx)}
              />
              <button
                className='addItem'
                onClick={(e) => addNewCell(idx)}
                title='add new cell'></button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
export default App;
