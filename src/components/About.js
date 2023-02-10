import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Acerca</p>
        <h1 className="primary-heading">
          {" "}
          Nos enfocamos en brindar servicios y soluciones digitales para su
          marca y negocio.
        </h1>
        <p className="primary-text"></p>
        <p className="primary-text">No le de mas vueltas!</p>
        <div className="about-buttons-container">
          <button className="secondary-button">Más información</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Video Promocional
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
