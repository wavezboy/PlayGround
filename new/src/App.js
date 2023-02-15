import Adder from "./Adder";
import CamelCase from "./CamelCase";

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        {/* <CamelCase /> */}
        <Adder />
      </div>
    </div>
  );
}

export default App;
