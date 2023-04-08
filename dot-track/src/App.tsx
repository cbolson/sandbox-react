import { useState, type MouseEvent } from "react";
import "./App.css";
interface Dots {
  x: number;
  y: number;
}
function App() {
  const [dots, setDots] = useState<Dots[]>([]);
  const draw = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setDots([...dots, { x: clientX, y: clientY }]);
  };
  const undo = () => {
    console.log("undo", dots);
  };
  return (
    <div className='App'>
      <div className='controls'>
        <button onClick={undo}>Undo</button>
        <button>Reset</button>
      </div>
      <div className='click-area' onClick={draw}>
        {dots.map(({ x, y }: Dots, i: number) => (
          <div
            className='dot'
            key={`dot-${i}`}
            style={{ left: x, top: y }}></div>
        ))}
      </div>
    </div>
  );
}

export default App;
