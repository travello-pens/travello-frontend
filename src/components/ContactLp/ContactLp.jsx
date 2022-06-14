import React from "react";
import "./ContactLp.css";
import { Link } from "react-router-dom";
import { FloatingLabel, Form, Button } from "react-bootstrap";

// assets
import Map from "../../assets/img/contact-map.svg";
import Phone from "../../assets/img/contact-phone.svg";
import Mail from "../../assets/img/contact-mail.svg";
import Youtube from "../../assets/img/contact-youtube.svg";
import Twitter from "../../assets/img/contact-twitter.svg";
import Instagram from "../../assets/img/contact-instagram.svg";
import Facebook from "../../assets/img/contact-facebook.svg";

function ContactLp() {
  return (
    <div className="cl-container" id="contact">
      <h2 className="cl-title">
        <span className="cl-title__span">Kontak</span> Kami
      </h2>
      <div className="cl-boxs">
        <Form className="cl-left-boxs">
          <h5 className="cl-left-title">Leave Message</h5>
          <FloatingLabel controlId="floatingInput" label="Full Name" className="mb-3">
            <Form.Control type="text" placeholder="Maskurnia shidi" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Your Email" className="mb-3">
            <Form.Control type="text" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: "200px" }} />
          </FloatingLabel>
          <Button className="btn-contact" variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
        <div className="cl-right-boxs">
          <div className="cl-right-boxs-top">
            <div className="cl-right-boxs-top-address">
              <div className="cl-right-boxs-top-address-icon">
                <img className="contact-icon" src={Map} alt="" />
              </div>
                <div className="cl-right-boxs-top-address-text">
                  Koridor Co-Working Space, Siola Building 3rd, Surabaya, East Java 60275.
                </div>
            </div>
            <div className="cl-right-boxs-top-address">
              <div className="cl-right-boxs-top-phone-icon">
                <img className="contact-icon" src={Phone} alt="" />
              </div>
                <div className="cl-right-boxs-top-phone-text">
                  +62 811 3100 311
                </div>
            </div>
            <div className="cl-right-boxs-top-address">
              <div className="cl-right-boxs-top-email-icon">
                <img className="contact-icon" src={Mail} alt="" />
              </div>
                <div className="cl-right-boxs-top-email-text">
                  halo@dailyhotels.id
                </div>
            </div>
            <div className="cl-right-boxs-top-address">
              <div className="cl-right-boxs-top-media-icon">
                <img className="contact-icon" src={Youtube} alt="" />
              </div>
              <div className="cl-right-boxs-top-media-icon">
                <img className="contact-icon" src={Instagram} alt="" />
              </div>
              <div className="cl-right-boxs-top-media-icon">
                <img className="contact-icon" src={Facebook} alt="" />
              </div>
            </div>
          </div>
          <div className="cl-right-boxs-bottom">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15831.431190601808!2d112.7372055!3d-7.2570204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x12072f0108ba519a!2sKORIDOR%20Coworking%20Space!5e0!3m2!1sen!2sid!4v1647948747290!5m2!1sen!2sid"
              className="iframe-div"
              style={{ width: "95%", border: "0", borderRadius: "8px" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactLp;
