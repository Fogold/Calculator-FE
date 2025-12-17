import { useState } from "react";

import Buttons from "./Buttons.jsx";
import Display from "./Display.jsx";

export default function Main() {
  let increment = 0;
  const [value, setValue] = useState(0);

  function changeValue(e) {
    setValue((value) => {
      value = e.value;
    });
  }

  function clear() {
    setValue(0);
  }

  return (
    <div>
      <Display value={value} />
      <Buttons changeValue={changeValue} clear={clear} increment={increment} />
    </div>
  );
}
