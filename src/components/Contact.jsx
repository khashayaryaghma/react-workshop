import { useState } from "react";
import Input from "./Input";
import "./contact.css";
import Button from "./button";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <>
      <form style={{ margin: "7rem 0" }} onSubmit={handleSubmit}>
        <h2 style={{ color: "#fff", textAlign: "center" }}>Contact Us</h2>
        <Input value={formData.name} onChange={handleChange} name="name" placeholder="Name" />
        <Input value={formData.email} onChange={handleChange} name="email" placeholder="Email" />
        <textarea
          value={formData.message}
          onChange={handleChange}
          name="message"
          placeholder="Message"
          style={{ resize: "none", padding: "1rem 0.5rem", fontSize: "1rem", border: "none", borderRadius: "8px" }}
        ></textarea>
        <Button>Submit</Button>
      </form>
    </>
  );
}

export default Contact;
