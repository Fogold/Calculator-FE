import { useState } from "react";
import Heading from "./Heading";
import Main from "./MainComponent";

function App() {
  const projectTitle = "Calculator";
  return (
    <div>
      <Heading />
      <Main />
    </div>
  );
}

export default App;
