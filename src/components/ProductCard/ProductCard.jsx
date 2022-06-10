import React from 'react';
import { BsCalendar3, BsArrowRight } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div className={"col m-2 p-3 " + styles.productCard}>
      <img className="img-fluid rounded-2 mb-2" src="https://cdn1-production-images-kly.akamaized.net/VNcWu_hwhIuQiscc8cYdUN5OSmc=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3159012/original/037760500_1592803600-Ilustrasi_Bali.jpg" alt="card_image" />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="fs-5 fw-bolder">Tanah Lot</p>
        <img className={styles.travelAgentLogo} src="https://picture.urbanindo.com/listing/57154113950/01/3974501808/was3120061-gudang-di-jual-di-driyorejo-gresik-1646709461/780/780.jpg" alt="travel_agent_logo" />
      </div>
      <div className="d-flex align-items-center mb-3">
        <BsCalendar3 color="#737373" className="me-2" />
        <p className="lh-sm">Paket 3 Hari</p>
      </div>
      <div className="d-flex mb-4">
        <HiOutlineLocationMarker color="#737373" className="me-2 flex-shrink-0" />
        <p className="lh-sm">Jl. KH Mas Mansyur 215 - 220 Banyuwangi</p>
      </div>
      <div className="d-flex justify-content-end">
        <p className="text-primary me-3">Rp4.500.000</p>
        <BsArrowRight className="text-primary" />
      </div>
    </div>
  );
};

export default ProductCard;