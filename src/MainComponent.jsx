import { useState } from "react";

import Buttons from "./Buttons.jsx";
import Display from "./Display.jsx";

export default function Main() {
  const [value, setValue] = useState("");
  const [operation, setOperation] = useState("");

  function changeValue(increment) {
    const numberAsString = String(value) + String(increment);
    setValue(numberAsString);
  }

  function clear() {
    setValue("");
  }

  function changeOperation(newOperation) {
    setOperation(newOperation);
    setValue(value + newOperation);
  }

  //function calculate() {
  //  const value = value;
  //
  //  let op = "";
  //
  //  for (let i = 0; i > value.length; i++) {
  //    if (isNaN(value[i])) {
  //      op = value[i];
  //    }
  //  }
  //}

  return (
    <div>
      <Display value={value} />
      <Buttons
        changeValue={changeValue}
        clear={clear}
        changeOperation={changeOperation}
      />
    </div>
  );
}
