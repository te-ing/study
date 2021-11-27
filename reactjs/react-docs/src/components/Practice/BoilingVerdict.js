import { useState } from "react";
import React from "react";

function BoilingVerdict(props) {
  const [temperature, setTemperature] = useState(
    props.value ? props.value : ""
  );

  const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
  };

  const handleChange = (e) => {
    setTemperature(e.target.value);
  };

  return (
    <div>
      <fieldset>
        <legend>Enter temperature in : {scaleNames[props.scale]}</legend>
        <input value={temperature} onChange={handleChange} />
      </fieldset>
    </div>
  );
}

export default BoilingVerdict;
