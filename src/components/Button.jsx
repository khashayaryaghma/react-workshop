const style = {
  padding: "0.5rem 1rem",
  color: "#fafafa",
  border: "none",
  backgroundColor: "#4c2c59",
  cursor: "pointer",
  borderRadius: "8px",
};


function Button({ children }) {
  return <button style={style}>{children}</button>;
}

export default Button;
