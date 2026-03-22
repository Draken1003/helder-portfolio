export default function Button({ onClick, text, ...props }) {
  return (
    <button onClick={onClick} {...props}>
      {text}
    </button>
  );
}
