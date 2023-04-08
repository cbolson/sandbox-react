import { useState, type MouseEvent } from "react";
import "./App.css";
interface Dots {
  x: number;
  y: number;
}
function App() {
  const [dots, setDots] = useState<Dots[]>([]);
  const [cacheDots, setCacheDots] = useState<Dots[]>([]);

  const drawDot = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    // clear cached dots to avoid undo and redo messing it up

    setCacheDots([]);
    setDots([...dots, { x: clientX, y: clientY }]);
  };
  const undoDot = () => {
    if (dots.length > 0) {
      // save copy of dots to be able to roll back
      const newDots = [...dots];
      // get last dot
      const lastDot = newDots.pop() as Dots;
      // save new dot arrays to state
      Promise.all([
        // add last dot to cache arr
        setCacheDots([...cacheDots, lastDot]),
        // re-create dots array with copied version minus the last dot
        setDots(newDots),
      ]);
    }
  };
  const redoDot = () => {
    if (cacheDots.length > 0) {
      // create new cache array from current cache before it is modified
      const newCache = [...cacheDots];
      // get last cache item and remove
      const lastCacheItem = newCache.pop() as Dot;
      Promise.all([
        // set cache array with cache minis the last dot
        setCacheDots(newCache),
        // add last dot back onto dots array
        setDots([...dots, lastCacheItem]),
      ]);
    }
  };
  return (
    <div className='App'>
      <div className='controls'>
        <button onClick={undoDot}>Undo</button>
        <button onClick={redoDot}>Reset</button>
      </div>
      <div className='click-area' onClick={drawDot}>
        {dots.map(({ x, y }: Dots, i: number) => (
          <div
            className='dot'
            key={`dot-${i}`}
            style={{ left: x, top: y }}></div>
        ))}
        {cacheDots.map(({ x, y }: Dots, i: number) => (
          <div
            className='dot cache'
            key={`cache-${i}`}
            style={{ left: x, top: y }}></div>
        ))}
      </div>
    </div>
  );
}

export default App;
