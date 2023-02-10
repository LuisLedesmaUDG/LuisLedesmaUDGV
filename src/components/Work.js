import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Ahorre Dinero",
      text: "Resultados increíbles a un costo accesible.",
    },
    {
      image: ChooseMeals,
      title: "Alto Rendimiento",
      text: "Páginas responsivas hechas a la medida con dedicaciòn",
    },
    {
      image: DeliveryMeals,
      title: "Mejore su alcance",
      text: "Miles de clientes potenciales a la espera de su producto o servicio",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Funcionalidad</p>
        <h1 className="primary-heading">¿Como funciona?</h1>
        <p className="primary-text">
          Realize una cita con un asesor, expliquenos sus requerimientos y elija
          el plan que mejor le acomode.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
