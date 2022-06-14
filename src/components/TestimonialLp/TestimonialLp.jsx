import React from "react";
import "./TestimonialLp.css";

//compoent
import Testi1 from "../../assets/img/testi 1.png";
import Testi2 from "../../assets/img/testi 2.png";
import Testi3 from "../../assets/img/testi 3.png";
function TestimonialLp() {
  return (
    <div className="tl-container" id="testimoni">
      <h2 className="tl-title">
        <span className="tl-title__span">Testimoni</span> Pengguna
      </h2>
      <div className="tl-cards-container">
        <img src={Testi1} alt="testimoni 1" className="testimonial-cards"/>
        <img src={Testi2} alt="testimoni 2" className="testimonial-cards"/>
        <img src={Testi3} alt="testimoni 3" className="testimonial-cards"/>
      </div>
    </div>
  );
}

export default TestimonialLp;
