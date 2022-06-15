//dependency
import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import styles from "./LandingPage.module.css";
import LandingSearchBar from "../../components/LandingSearchBar/LandingSearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import Form from "react-bootstrap/Form";
import mitraBox from "../../assets/images/mitraBox.png";

//component
import TravelAgentCard from "../../components/TravelAgentCard/TravelAgentCard";
import MainLayout from "../../layout/MainLayout/MainLayout";
import AboutusLp from "../../components/AboutusLp/AboutusLp";
import HotelSantika from "../../assets/images/Hotel+Santika.png";
import { getLocations } from "../../utils/apis/getLocations";
import { Link } from "react-router-dom";
import { getTravelAgents } from "../../utils/apis/getTravelAgents";
function LandingPage() {
  const [locations, setLocations] = useState([]);
  const [travelAgents, setTravelAgents] = useState([]);

  useEffect(() => {
    // Fetch locations data
    getLocations()
      .then((data) => {
        setLocations(data.data);
      })
      .catch(() => { });

    getTravelAgents()
      .then((data) => {
        setTravelAgents(data.data);
      })
      .catch(() => { });
  }, []);

  const searchHandler = (search) => {
    console.log("Mencari : " + search);
  };
  return (
    <MainLayout className="lp-main-container">
      <div className={styles.jumbotron}>
        <div className="col-12 col-md-9 mx-auto my-5">
          <h1 className="display-1 text-center">
            <strong className={styles.jumbotronTitle}>Rencanakan Perjalanan Wisata Anda Bersama Travello.id</strong>
          </h1>
          <p className="lead text-center lh-lg mt-4 text-white">Temukan beragam destinasi wisata dari berbagai travel agent unggulan yang ada di Indonesia hanya dengan satu platform.</p>
          <LandingSearchBar placeholder="Cari paket wisata pilihan anda" onSubmit={searchHandler} />
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="h4 text-primary">Jelajahi lebih banyak Travel Agent di Indonesia</h2>
        <p className="text-muted mb-4">Lihat berbagai travel agent yang bermitra di Travello</p>
        <div className="row">
          {travelAgents.map(ta => (
            <TravelAgentCard key={ta.id} travelAgent={ta} />
          ))}
          {/* <TravelAgentCard />
          <TravelAgentCard />
          <TravelAgentCard />
          <TravelAgentCard /> */}
        </div>
      </div>
      <div className="lp-aboutus">
        <AboutusLp />
      </div>
      {/* city */}
      <div className={styles.citySection}>
        <div className={styles.titleSection}>
          <span className={styles.titleColor}>Destinasi Terbaik</span> di Indonesia
        </div>
        <div className={styles.dividerColor}></div>
        <div className={styles.contentSection}>
          {locations.map((l) => (
            <Link key={l.id} to={`/tujuan/${l.name_location}`} className={styles.cityLink}>
              <div className={styles.cityItem}>
                <div className={styles.cityImage}>
                  <img src="https://d3p0bla3numw14.cloudfront.net/news-content/img/2021/05/03112735/Tempat-Tinggal-Terbaik-di-Bali.jpg" alt="city" className={styles.cityImageItem} />
                </div>
                <p className={styles.cityTitle}>{l.name_location}</p>
                <p className={styles.totalDestination}>50 destinasi</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* mitra */}
      {/* <div className={styles.mitraSectionMitra}>
        <img src={mitraBox} alt="" className={styles.mitraImageBox} />
      </div> */}
      <div className={styles.mitraSection}>
        <h5 className={styles.mitraTitleColor}>Siapa saja mitra kami ?</h5>
        <p className={styles.mitraDesc}>Lebih dari 50 hotel bintang telah bermitra dengan InHotel</p>
        <div className={styles.mitraContent}>
          <img src={mitraBox} alt="" className={styles.mitraImageBox} />
        </div>
      </div>

      {/* contact */}
      <div className={styles.contact}>
        <div className={styles.contactLeft}>
          <p className={styles.contactTag}>Buletin kami</p>
          <h4 className={styles.contactTitle}>Tetap update dengan kami dengan berita mingguan</h4>
          <p className={styles.contactDesc}>Berita terbaru aplikasi dan pengembangan produk langsung ke email Anda</p>
        </div>
        <div className={styles.contactRight}>
          <p className={styles.formTitle}>Masukkan email anda!</p>
          <div className={styles.formMitraGroup}>
            <Form.Control type="email" placeholder="Masukkan email" />
            <button className={styles.contactBtn}>Kirim</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default LandingPage;
