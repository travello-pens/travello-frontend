import React from "react";
//dependency
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./ServiceLp.css";

//component
import Sosmed from "../../assets/img/phone.png";
import Mice from "../../assets/img/mice.png";
import FnB from "../../assets/img/fnb.png";
import RoomBooking from "../../assets/img/roomBooking.png";
function ServiceLp() {
  return (
    <div className="sl-container" id="service">
      <h2 className="sl-title">
        <span className="sl-title__span">All</span> Service
      </h2>

      <div className="sl-card-main-container">
        <div className="sl-card-container">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80" alt="" />
              </div>
              <div className="flip-card-back">
                <h3>Social Media</h3>
                <p>Facebook, Instagram, Twitter, etc.</p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://images.unsplash.com/photo-1570126646281-5ec88111777f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80" alt="" />
              </div>
              <div className="flip-card-back">
                <h3>MICE</h3>
                <p>Meeting Room, Ballroom, Wedding, etc.</p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
              </div>
              <div className="flip-card-back">
                <h3>Food & Beverage</h3>
                <p>Dine In, Set Menu, Delivery.</p>
              </div>
            </div>
          </div>

          {/* </div>

      <div className="sl-card-container-padding">
        <div className="sl-card-container"> */}

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
              </div>
              <div className="flip-card-back">
                <h3>Room Package</h3>
                <p>Seasonal, Bundling.</p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
              </div>
              <div className="flip-card-back">
                <h3>Wellness Service</h3>
                <p>Massage, Spa, Yoga, etc.</p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
              </div>
              <div className="flip-card-back">
                <h3>Gym Station</h3>
                <p>Daily Pack, Mountly Pack.</p>
              </div>
            </div>
          </div>

          {/* </div>
      </div>

      <div className="sl-card-container-padding">
        <div className="sl-card-container"> */}

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://images.unsplash.com/photo-1581610489881-f316ffcf0424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" alt="" />
              </div>
              <div className="flip-card-back">
                <h3>Swimming Pool</h3>
                <p>Kid Zone, Private Pool</p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
              </div>
              <div className="flip-card-back">
                <h3>Event</h3>
                <p>Music, Seminar, Birthday, etc.</p>
              </div>
            </div>
          </div>

          <div className="flip-card flip-card-special">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80" alt="" />
              </div>
              <div className="flip-card-back">
                <h3>Hampers</h3>
                <p>Eid Mubarak, Christmas, New Year, ect.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
}

export default ServiceLp;
