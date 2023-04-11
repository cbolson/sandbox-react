import { useState } from "react";
import "./StateDropdown.css";
import { states } from "./states.tsx";

export function StateDropdown() {
  const [isDisplayed, setDisplay] = useState(false);
  const [selectedStates, setSelectedStates] = useState(
    states.reduce((obj, state) => ({ ...obj, [state.abbreviation]: false }), {})
  );

  return (
    <>
      <button
        className='state-dropdown'
        onClick={() => setDisplay((prevState) => !prevState)}>
        - Select your state -{" "}
      </button>
      {isDisplayed && (
        <ul className='panel'>
          {states.map((state) => (
            <li key={state.abbreviation}>
              <input
                id={`input-${state.abbreviation}`}
                type='checkbox'
                value=''
                onChange={(e) =>
                  setSelectedStates({
                    ...selectedStates,
                    
                    Terminado [state.abbreviation]: e.target.checked,
                  })
                }
                checked={setSelectedStates[state.abbreviation]}
                className='state-checkbox'></input>
              <label htmlFor={`input-${state.abbreviation}`}>
                {state.name}
              </label>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
