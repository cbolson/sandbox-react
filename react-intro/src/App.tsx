import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const items = ["one", "two", "three", "four", "five", "six"];
  //const colors = ["red", "green", "pink", "yellow", "blue", "black", "orange"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <>
      <main className='w-50 ms-auto me-auto '>
        <Alert alertType='success' msg='Everything is dandy' />{" "}
        <ListGroup
          items={items}
          heading='Numbers'
          onSelectItem={handleSelectItem}
        />
        <br />
        {alertVisible && (
          <Alert
            onClose={() => setAlertVisible(false)}
            alertType='danger'
            msg='New Alert'
          />
        )}
        <Button btnType='success' onClick={() => setAlertVisible(true)}>
          Press here
        </Button>
      </main>
    </>
  );
}
export default App;
