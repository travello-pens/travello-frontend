import React from "react";
import "./AboutusLp.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// component
import FirstImage from "../../assets/img/about-us1.png";
import SecondImage from "../../assets/img/about-us2.png";

function AboutusLp() {
  return (
    <div className="al-container" id="aboutus">
      <h2 className="al-title">
        <span className="al-title__span">Tentang</span> Kami
      </h2>
      <div className="al-first-section">
        <img src={FirstImage} alt="first image about us" className="al-first__image" />
        <div className="al-first__description">
          <p className="fd-tag">Kerjasama</p>
          <h3 className="sd-title">Kerjasama dengan mitra travel agent</h3>
          <p className="fd-text">
            Semua mitra yang tergabung dalam Travello sudah terverifikasi untuk menjaga kredibilitas platform, sehingga tidak ada pihak yang akan dirugikan. Kami juga akan terus melakukan kontrol penuh kepada mitra untuk dapat terus
            berkembang menjadi platform yang lebih baik.
          </p>
        </div>
      </div>
      <div className="al-second-section">
        <div className="al-second__description">
          <p className="fd-tag">Pengelolaan data</p>
          <h3 className="sd-title">Kelola data secara pribadi</h3>
          <p className="sd-text">
            Kami akan memberikan akses penuh kepada pihak mitra untuk dapat mengelola layanannya sendiri, sehingga pengguna tidak perlu kuatir akan adanya campur tangan dari pihak penggembang yang akan mengakses data secara ilegal.
          </p>
        </div>
        <img src={SecondImage} alt="second image about us" className="al-second__image" />
      </div>
      <div className="al-third-section">
        <div className="al-third__box">
          <h2 className="fd-h2" id="benefits">
            Kenapa Memilih Kami
          </h2>
        </div>
        <div className="al-third__box">
          <h3 className="about-content-title">Sistem yang terintegrasi</h3>
          <p className="about-content-desc">
            Semua sistem yang ada di dalam Travello terhubung dengan database dimana keamanan data merupakan prioritas dalam platform yang kami sediakan, sehingga pengguna tidak perlu khawatir akan kebocoran data.
          </p>
        </div>
        <div className="al-third__box">
          <h3 className="about-content-title">Transparansi harga</h3>
          <p className="about-content-desc">Semua harga paket wisata yang ada akan ditampilkan kepada pengguna, tidak akan ada biaya tambahan diluar dari yang sudah dideskripsikan, sehingga pengguna tidak merasa tertipu.</p>
        </div>
        <div className="al-third__box">
          <h3 className="about-content-title">Banyak pilihan</h3>
          <p className="about-content-desc">Berbeda dengan E-Commerce lain yang hanya menyediakan layanan kamar, Travello menyediakan banyak pilihan layanan yang disediakan oleh travel agent tanpa ada batasan.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutusLp;
