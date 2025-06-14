import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";
import Component1 from "./component/Component1";

function App() {
  const [inputValue, setInputValue] = useState("java");
  // const [count, setCount] = useState(0);
  const count = useRef(4);

  useEffect(() => {
    count.current = count.current + 1;
    // setCount(count + 1);
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      {/* <h1>Render Count: {count}</h1> */}
      <Component1 user={inputValue} />
    </>
  );
}

export default App;
