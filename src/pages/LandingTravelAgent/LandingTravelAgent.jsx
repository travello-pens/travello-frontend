import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LandingSearchBar from '../../components/LandingSearchBar/LandingSearchBar';
import ProductCard from '../../components/ProductCard/ProductCard';
import MainLayout from '../../layout/MainLayout/MainLayout';
import { getProductsByTravelAgent } from '../../utils/apis/getProductsByTravelAgent';

import styles from "./LandingTravelAgent.module.css";

const LandingTravelAgent = () => {
  const { travelAgent } = useParams();
  const [products, setProducts] = useState([]);
  const [noProducts, setNoProducts] = useState(false);

  useEffect(() => {
    getProductsByTravelAgent(travelAgent)
      .then((data) => {
        setProducts(data.data);
      })
      .catch(() => {
        setNoProducts(true);
      })
  }, [travelAgent]);

  const searchHandler = (search) => {
    console.log('Mencari : ' + search);
  };

  return (
    <MainLayout>
      <div className={"row p-2 " + styles.jumbotron}>
        <div className="col-12 col-md-9 mx-auto my-5">
          <div className="row">
            <img src="https://picture.urbanindo.com/listing/57154113950/01/3974501808/was3120061-gudang-di-jual-di-driyorejo-gresik-1646709461/780/780.jpg" alt="travel_agent_avatar" className="rounded-circle col-6 col-sm-4 col-lg-2 mx-auto mb-4" />
          </div>
          <h1 className="display-1 text-center my-5"><strong className="fw-bolder text-white">{travelAgent}</strong></h1>
          <p className="lead text-center lh-lg mt-4 text-white">Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Conveniently situated in the Praya part of Lombok, this property puts you close to attractions and interesting dining options.</p>
          <LandingSearchBar placeholder="Cari paket wisata pilihan anda" onSubmit={searchHandler} />
          <div className="row col-8 mx-auto mt-4">
            <div className="col p-2">
              <div className={"d-flex justify-content-center align-items-center mx-auto " + styles.socialMediaIcon}>
                <img src={require('../../assets/images/social-medias/facebook.png')} alt="social_media_icon" />
              </div>
            </div>
            <div className="col p-2">
              <div className={"d-flex justify-content-center align-items-center mx-auto " + styles.socialMediaIcon}>
                <img src={require('../../assets/images/social-medias/twitter.png')} alt="social_media_icon" />
              </div>
            </div>
            <div className="col p-2">
              <div className={"d-flex justify-content-center align-items-center mx-auto " + styles.socialMediaIcon}>
                <img src={require('../../assets/images/social-medias/instagram.png')} alt="social_media_icon" />
              </div>
            </div>
            <div className="col p-2">
              <div className={"d-flex justify-content-center align-items-center mx-auto " + styles.socialMediaIcon}>
                <img src={require('../../assets/images/social-medias/youtube.png')} alt="social_media_icon" />
              </div>
            </div>
            <div className="col p-2">
              <div className={"d-flex justify-content-center align-items-center mx-auto " + styles.socialMediaIcon}>
                <img src={require('../../assets/images/social-medias/tiktok.png')} alt="social_media_icon" />
              </div>
            </div>
            <div className="col p-2">
              <div className={"d-flex justify-content-center align-items-center mx-auto " + styles.socialMediaIcon}>
                <img src={require('../../assets/images/social-medias/whatsapp.png')} alt="social_media_icon" />
              </div>
            </div>
            <div className="col p-2">
              <div className={"d-flex justify-content-center align-items-center mx-auto " + styles.socialMediaIcon}>
                <img src={require('../../assets/images/social-medias/web.png')} alt="social_media_icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="h4 text-primary">Layanan paket wisata</h2>
        <p className="text-muted mb-4">Lihat berbagai layanan paket wisata yang tersedia.</p>
        <div className="row mx-auto">
          {!noProducts && products.map(p => (
            <>
              <ProductCard key={p.id} product={p} />
            </>
          ))}
          {noProducts && <p className="text-center fs-3 fw-bolder text-muted mt-5">Tidak Ada Produk</p>}
        </div>
      </div>
    </MainLayout>
  );
};

export default LandingTravelAgent;