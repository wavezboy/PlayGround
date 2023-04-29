import { useEffect } from "react";
import Adder from "./Adder";
import CamelCase from "./CamelCase";
import Keyup from "./keyup";
import Object from "./Object";
import New from "./Grading";
import Sock from "./Sock";
import CountingValley from "./CountingValley";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/Example")
      .then((res) => res.json())
      .then((data) => {
        const rand = Math.floor(Math.random() * 6);

        const json = data[rand];

        console.log(json);
      });
  }, []);

  return (
    <div className="App">
      <div className="content">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        {/* <CamelCase /> */}
        {/* <Adder /> */}
        {/* <Object /> */}
        {/* <Keyup /> */}
        {/* <New /> */}
        {/* <Sock /> */}
        <CountingValley />
      </div>
    </div>
  );
}

export default App;
