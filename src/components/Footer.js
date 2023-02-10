import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
          <p>2023 WEBY todos los derechos reservados.</p>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Politicas de uso</span>
          <span>Ayuda</span>
          <span>Licencia</span>
          <span>¿Buscas trabajo?</span>
          <span>Testimonios</span>
          <span>Dirección</span>
        </div>
        <div className="footer-section-columns">
          <span>+52 333-3333-3333</span>
          <span>hola@weby.com</span>
          <span>soporte@weby.comm</span>
          <span>quejasysugerencias@weby.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terminos y Condiciones</span>
          <span>Politica de Privacidad</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
