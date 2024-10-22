import { useState } from "react";
import Input from "./Input";
import "./contact.css";
import Button from "./Button";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <form style={{ margin: "7rem 0" }} onSubmit={submitHandler}>
      <h2 style={{ color: "#fff", textAlign: "center" }}>Contact Us</h2>
      <Input value={formData.fullName} onChange={handleChange} name="fullName" placeholder="Full Name" />
      <Input value={formData.email} onChange={handleChange} name="email" placeholder="Email" />
      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        name="message"
        style={{ resize: "none", padding: "1rem 0.5rem", fontSize: "1rem", border: "none", borderRadius: "8px" }}
      />
      <Button>Submit</Button>
    </form>
  );
}

export default Contact;
