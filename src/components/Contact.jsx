import React, { useState } from "react";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviar datos a Formspree
    const response = await fetch("https://formspree.io/f/xkgdzjzw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert(`Gracias ${formData.nombre}, tu mensaje ha sido enviado!`);
      setFormData({ nombre: "", email: "", mensaje: "" });
    } else {
      alert("Hubo un error al enviar el formulario.");
    }
  };

  return (
    <>
      <h1 className="title">Contacto</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Mensaje:</label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Contacto;