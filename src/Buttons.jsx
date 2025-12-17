import Numbers from "./Numbers.jsx";
import Operations from "./Operations.jsx";
import Utilities from "./Utilities.jsx";

export default function Buttons({ changeValue, clear, changeOperation }) {
  return (
    <div>
      <Numbers changeValue={changeValue} clear={clear} />
      <Operations changeOperation={changeOperation} />
      <Utilities clear={clear} />
    </div>
  );
}
