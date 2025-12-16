export default function Buttons({ changetoOne, clear }) {
  return (
    <div>
      <button onClick={changetoOne}>1</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}
