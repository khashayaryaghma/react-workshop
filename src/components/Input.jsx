import "./input.css";

function Input({ value, onChange, placeholder, name }) {
  return <input value={value} onChange={onChange} placeholder={placeholder} name={name} />;
}

export default Input;
