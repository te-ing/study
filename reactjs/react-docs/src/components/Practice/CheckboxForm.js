import { useState } from "react";

function CheckboxForm() {
  const [isGoing, setIsGoing] = useState(true);
  const [numberOfGuests, setNumberOfGuests] = useState(2);

  const handleInputChange = (e) => {
    e.target.value === "on"
      ? setIsGoing(!isGoing)
      : setNumberOfGuests(e.target.value);
  };

  return (
    <div>
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={isGoing}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={numberOfGuests}
            onChange={handleInputChange}
          />
        </label>
      </form>
    </div>
  );
}

export default CheckboxForm;
