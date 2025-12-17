export default function Buttons({ changeValue, clear, increment }) {
  return (
    <div>
      <button
        onClick={(e) => {
          e.value = 1;
          changeValue(e);
        }}
      >
        1
      </button>
      <button
        onClick={(e) => {
          e.value = 2;
          changeValue(e);
        }}
      >
        2
      </button>
      <button
        onClick={(e) => {
          e.value = 3;
          changeValue(e);
        }}
      >
        3
      </button>
      <button
        onClick={(e) => {
          e.value = 4;
          changeValue(e);
        }}
      >
        4
      </button>
      <button
        onClick={(e) => {
          e.value = 5;
          changeValue(e);
        }}
      >
        5
      </button>
      <button
        onClick={(e) => {
          e.value = 6;
          changeValue(e);
        }}
      >
        6
      </button>
      <button
        onClick={(e) => {
          e.value = 7;
          changeValue(e);
        }}
      >
        7
      </button>
      <button
        onClick={(e) => {
          e.value = 8;
          changeValue(e);
        }}
      >
        8
      </button>
      <button
        onClick={(e) => {
          e.value = 9;
          changeValue(e);
        }}
      >
        9
      </button>
      <button onClick={clear}>clear</button>
    </div>
  );
}
