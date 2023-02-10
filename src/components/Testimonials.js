import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonios</p>
        <h1 className="primary-heading">
          Que estan diciendo nuestros clientes
        </h1>
        <p className="primary-text">Mire las opiniones!</p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Desperdicié mi tiempo y dinero en soluciones genericas con resultados
          pobres y mala calidad, hasta que conocí a WEBY y ahora mis ventas hán
          aumentado un 400%! Gracias!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Luis Ledesma</h2>
      </div>
    </div>
  );
};

export default Testimonial;
