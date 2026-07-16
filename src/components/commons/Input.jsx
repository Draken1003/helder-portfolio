export default function Input({ className = "", ...props }) {
  return (
    <input
      className={`border-gray2 text-gray1 focus:outline-orange w-full border p-2 pl-3 focus:outline-1 ${className}`}
      {...props}
    />
  );
}
