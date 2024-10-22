import "./input.css"

function Input({ value, placeholder, onChange, name }) {
  return <input value={value} placeholder={placeholder} onChange={onChange} name={name} />;
}

export default Input;
