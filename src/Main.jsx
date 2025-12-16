import { useState } from "react";

import Buttons from "./Buttons.jsx";
import Display from "./Display.jsx";

export default function Main() {
  const [value, setValue] = useState(0);

  function changetoOne() {
    setValue((value) => {
      return 1;
    });
  }

  function clear() {
    setValue((value) => {
      return 0;
    });
  }

  return (
    <div>
      <Display value={value} />
      <Buttons changetoOne={changetoOne} clear={clear} />
    </div>
  );
}
