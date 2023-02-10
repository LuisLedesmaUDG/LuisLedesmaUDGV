import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Tiene alguna pregunta?</h1>
      <p className="primary-text">Contactenos! nosotros le podemos ayudar</p>
      <div className="contact-form-container">
        <input type="text" placeholder="Escriba su correo aquí!" />
        <button className="secondary-button">Suscribir</button>
      </div>
    </div>
  );
};

export default Contact;
