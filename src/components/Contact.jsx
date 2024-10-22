import { useState } from "react";
import Input from "./Input";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  function handleChange(e) {
    if (e.target.name === "name") {
      console.log(e);
      setFormData({ ...formData, name: e.target.value });
    }
  }
  return (
    <>
      <h2 style={{ margin: "3rem 0" }}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <Input value={formData.name} onChange={handleChange} name="name" placeholder="Name" />
        <Input value={formData.name} onChange={handleChange} name="email" placeholder="Email" />
        <textarea value={formData.message} onChange={handleChange} name="message" placeholder="Message" style={{ resize: "none" }}></textarea>
      </form>
    </>
  );
}

export default Contact;
