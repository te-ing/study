import { useState } from "react";
import React from "react";

function TemperatureInput(props) {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
  };

  const handleChange = (e) => {
    if (e.target.name === "Celsius") {
      setCelsius(e.target.value);
      setFahrenheit(tryConvert(celsius, toFahrenheit));
    } else {
      setFahrenheit(e.target.value);
      setCelsius(tryConvert(fahrenheit, toCelsius));
    }
    if (e.target.value === "") {
      setCelsius("");
      setFahrenheit("");
    }
  };

  return (
    <div>
      <fieldset>
        <legend>Enter temperature in {scaleNames["c"]}: </legend>
        <input value={celsius} onChange={handleChange} name={scaleNames["c"]} />
      </fieldset>

      <fieldset>
        <legend>Enter temperature in {scaleNames["f"]}: </legend>
        <input
          value={fahrenheit}
          onChange={handleChange}
          name={scaleNames["f"]}
        />
      </fieldset>
    </div>
  );
}

export default TemperatureInput;
