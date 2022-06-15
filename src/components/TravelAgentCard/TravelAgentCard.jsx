import React from "react";
import { BsCalendar3, BsArrowRight } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import styles from "./TravelAgentCard.module.css";
import PesonaIndonesia from "../../assets/images/PesonaIndonesia.png";

const TravelAgentCard = () => {
  return (
    <div className={"col m-2 p-3 " + styles.productCard}>
      <img className="img-fluid rounded-2 mb-2" src={PesonaIndonesia} alt="card_image" />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="fs-5 fw-bolder">Pesona Indonesia</p>
      </div>
      <div className="d-flex align-items-center mb-3">
        <BsCalendar3 color="#737373" className="me-2" />
        <p className="lh-sm mt-3">40 Paket Wisata</p>
      </div>
      <div className="d-flex mb-4">
        <HiOutlineLocationMarker color="#737373" className="me-2 flex-shrink-0" />
        <p className="lh-sm">Jl. KH Mas Mansyur 215 - 220 Banyuwangi</p>
      </div>
      <div className="d-flex justify-content-end align-items-center">
        <p className="text-primary me-3 mt-3">Lihat detail</p>
        <BsArrowRight className="text-primary" />
      </div>
    </div>
  );
};

export default TravelAgentCard;
