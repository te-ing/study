import ReactDOM from "react-dom";
import BoilingVerdict from "./components/Practice/BoilingVerdict";
import TemperatureInput from "./components/Practice/TemperatureInput";

function App() {
  return (
    <div>
      <BoilingVerdict scale={"c"} />
      <BoilingVerdict scale={"f"} />
      -------------------------------------------------------------
      <br />
      <TemperatureInput />
    </div>
  );
}

export default App;
