import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";
import "./App.css";
import {type State} from "./types.d"

const initialState = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: "",
}




function App() {
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(reducer,inistalState);
   return 
   <div className='App'>
     chatGPT translate
     <button
       onClick={() => {
         dispatch({ type: "SET_FROM_LANGUAGE", payload: "es" });
       }}>
       cambiar a español
     </button>
   </div>;
}

export default App;
