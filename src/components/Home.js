import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Banner" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">La WEB al alcance de tus manos!</h1>
          <p className="primary-text">
            Nunca había sido tan facil tener tu propia marca y sitio WEB!
          </p>
          <button className="secondary-button">
            Cotiza Ahora! <FiArrowRight />{" "}
          </button>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
