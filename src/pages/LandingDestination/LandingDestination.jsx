import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LandingSearchBar from '../../components/LandingSearchBar/LandingSearchBar';
import ProductCard from '../../components/ProductCard/ProductCard';
import MainLayout from '../../layout/MainLayout/MainLayout';
import { getProductsByLocation } from '../../utils/apis/getProductsByLocation';

import styles from "./LandingDestination.module.css";

const LandingDestination = () => {
  const { destination } = useParams();
  const [products, setProducts] = useState([]);
  const [noProducts, setNoProducts] = useState(false);

  useEffect(() => {
    // Fetch product card data
    getProductsByLocation(destination)
      .then(data => {
        setProducts(data.data);
      }).catch(data => {
        setNoProducts(true);
      });
  }, [destination]);

  const searchHandler = (search) => {
    console.log('Mencari : ' + search);
  };

  return (
    <MainLayout>
      <div className={"row p-2 " + styles.jumbotron}>
        <div className="col-12 col-md-9 mx-auto my-5">
          <h1 className="display-1 text-center mb-5"><strong className="fw-bolder text-white">{destination}</strong></h1>
          <p className="lead text-center lh-lg mt-4 text-white">Jelajahi setiap wisata dengan kemudahan transaksi bersama dengan Travello Buat pengalaman terbaik anda saat ini juga.</p>
          <LandingSearchBar placeholder="Cari paket wisata pilihan anda" onSubmit={searchHandler} />
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="h4 text-primary">Jelajahi lebih banyak Travel Agent di Indonesia</h2>
        <p className="text-muted mb-4">Lihat berbagai travel agent yang bermitra di Travello</p>
        <div className="row mx-auto">
          {!noProducts && products.map(p =>
            <ProductCard key={p.id} product={p} />
          )}
          {noProducts && <p className="text-center fs-3 fw-bolder text-muted mt-5">Tidak Ada Produk</p>}
        </div>
      </div>
    </MainLayout>
  );
};

export default LandingDestination;