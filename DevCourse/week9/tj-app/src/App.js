import { useCallback, useState } from "react";
import Checkbox from "./components/Checkbox";

function App() {
  const [foodOn, setFoodOn] = useState(false);
  const [clothesOn, setClothesOn] = useState(false);
  const [shelterOn, setShelterOn] = useState(false);

  // const foodChange = (e) => setFoodOn(e.target.checked);
  const foodChange = useCallback((e) => setFoodOn(e.target.checked), []);
  const clothesChange = useCallback((e) => setClothesOn(e.target.checked), []);
  const shelterChange = useCallback((e) => setShelterOn(e.target.checked), []);

  return (
    <div>
      <Checkbox label="Food" on={foodOn} onChange={foodChange} />
      <Checkbox label="Clothes" on={clothesOn} onChange={clothesChange} />
      <Checkbox label="Shelter" on={shelterOn} onChange={shelterChange} />
    </div>
  );
}

export default App;

