//dependency
import React from "react";
import "./LandingPage.css";
import styles from "./LandingPage.module.css";
import LandingSearchBar from "../../components/LandingSearchBar/LandingSearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";

//component
import MainLayout from "../../layout/MainLayout/MainLayout";
import AboutusLp from "../../components/AboutusLp/AboutusLp";
import ServiceLp from "../../components/ServiceLp/ServiceLp";
import TestimonialLp from "../../components/TestimonialLp/TestimonialLp";
import ContactLp from "../../components/ContactLp/ContactLp";
import search from "../../assets/img/search.png";

function LandingPage() {
  const searchHandler = (search) => {
    console.log("Mencari : " + search);
  };
  return (
    <MainLayout className="lp-main-container">
      <div className={"row p-2 " + styles.jumbotron}>
        <div className="col-12 col-md-9 mx-auto my-5">
          <h1 className="display-1 text-center">
            <strong className="fw-bolder text-white">Rencanakan Perjalanan Wisata Anda Bersama Travello.id</strong>
          </h1>
          <p className="lead text-center lh-lg mt-4 text-white">Temukan beragam destinasi wisata dari berbagai travel agent unggulan yang ada di Indonesia hanya dengan satu platform.</p>
          <LandingSearchBar placeholder="Cari paket wisata pilihan anda" onSubmit={searchHandler} />
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="h4 text-primary">Jelajahi lebih banyak Travel Agent di Indonesia</h2>
        <p className="text-muted mb-4">Lihat berbagai travel agent yang bermitra di Travello</p>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="lp-aboutus">
        <AboutusLp />
      </div>
      <div className="lp-services">{/* <ServiceLp /> */}</div>
      <div className="lp-testimonila">{/* <TestimonialLp /> */}</div>
      <div className="lp-contact">{/* <ContactLp /> */}</div>
      <div className="lp-contact"></div>
    </MainLayout>
  );
}

export default LandingPage;
