export default function Operations({ changeOperation }) {
  return (
    <div>
      <button
        onClick={() => {
          changeOperation("+");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          changeOperation("-");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          changeOperation("x");
        }}
      >
        x
      </button>
      <button
        onClick={() => {
          changeOperation("/");
        }}
      >
        /
      </button>
    </div>
  );
}
