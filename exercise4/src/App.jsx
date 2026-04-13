import { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <button onClick={toggle}>
        {isOn ? "turn ON" : "turn OFF"}
      </button>

      <p>The button is {isOn ? "ON" : "OFF"}</p>
    </>
  );
}

export default ToggleButton;