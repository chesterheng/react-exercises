import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <button onClick={handleClick}>
        {show ? "Hide Element Below" : "Show Element Below"}
      </button>
      {show && <div>Toggle Challenge</div>}
    </>
  );
}

export default App;
