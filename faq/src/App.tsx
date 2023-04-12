import Faq from "./components/Faq";
import faqs from "./data/faqs";

import "./App.css";
//title={faq.title}info={faq.info}
function App() {
  return (
    <div className='App'>
      <h1>The faqs as we know them:</h1>
      <ul className='faq'>
        {faqs.map((faq, idx) => (
          <Faq
            key={`faq-${idx}`}
            {...faq}
            ></Faq>
        ))}
      </ul>
    </div>
  );
}

export default App;
