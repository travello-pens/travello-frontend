import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import DatePicker from "react-datepicker";
//styles
import styles from "./DetailProduct.module.css";
//images/icon
import { HiReceiptTax } from "react-icons/hi";
import { AiTwotoneHome } from "react-icons/ai";
import { BsCalendarDateFill } from "react-icons/bs";
import MainLayout from "../../layout/MainLayout/MainLayout";
function DetailProduct() {
  return (
    <MainLayout>
      <div className={styles.mainWrapper}>
        <div className={styles.main}>
          <div className={styles.mainTitle}>
            <h3 className={styles.title}>Tanah Lot</h3>
            <div className={styles.menuTitle}>
              <p className={styles.menuItemTitle}>By Pesona Indonesia</p>
            </div>
          </div>
          <div className={styles.mainGalery}>
            <Carousel className={styles.mainGalery}>
              <div className={styles.thumbImage}>
                <img className={styles.imageItem} src="https://res.klook.com/image/upload/c_crop,w_5006,h_2777,x_0,y_280/w_1125,h_624/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/destination/kvcqcy32vayw4b2qnmwk.jpg" />
              </div>
              <div className={styles.thumbImage}>
                <img className={styles.imageItem} src="https://res.klook.com/image/upload/c_crop,w_5006,h_2777,x_0,y_280/w_1125,h_624/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/destination/kvcqcy32vayw4b2qnmwk.jpg" />
              </div>
            </Carousel>
          </div>
          <div className={styles.mainContent}>
            {/* LEFT */}
            <div className={styles.contentLeft}>
              <div className={styles.description}>
                <h5 className={styles.descriptionTitle}>Deskripsi</h5>
                <div className={styles.descriptionText}>
                  Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux. Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the charms of the city thanks to its ideal
                  location. Close to many shops, bars and restaurants, you can access the apartment by tram A and C and bus routes 27 and 44. ...
                </div>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.services}>
                <div className={styles.service}>
                  <HiReceiptTax className={styles.serviceIcon} />
                  <div className={styles.serviceText}>
                    <h6 className={styles.seviceTitle}>Tax and service included</h6>
                    <p className={styles.serviceDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className={styles.service}>
                  <AiTwotoneHome className={styles.serviceIcon} />
                  <div className={styles.serviceText}>
                    <h6 className={styles.seviceTitle}>Take away</h6>
                    <p className={styles.serviceDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className={styles.service}>
                  <BsCalendarDateFill className={styles.serviceIcon} />
                  <div className={styles.serviceText}>
                    <h6 className={styles.seviceTitle}>Free cancellation after 7 days.</h6>
                    <p className={styles.serviceDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
              <div className={styles.divider}></div>
            </div>
            {/* RIGHT */}
            <div className={styles.contentRight}>
              <div className={styles.selectPackage}>
                {/* <FormControl>
                      <FormLabel className={styles.label}>Pilih Paket</FormLabel>
                      <RadioGroup onChange={selectPackageChange} name="radio-buttons-group">
                        <FormControlLabel className={styles.packageItem} value={paket.id} control={<Radio />} label={`Rp. ${formatRupiah(paket.harga_harga)} / ${paket.nama_harga}`} />
                      </RadioGroup>
                    </FormControl> */}
              </div>
              <div className={styles.timePickerWrapper}>
                <p className={styles.timePickerTitle}>TANGGAL PESANAN</p>
                <div className={styles.timeBox}>
                  <BsCalendarDateFill className={styles.dateIcon} />
                  <DatePicker className={styles.timePicker} />
                </div>
              </div>
              <div className={styles.pricesList}>
                <div className={styles.mainPrice}>
                  <p className={styles.priceTitle}>Biaya Utama</p>
                  <p className={styles.pricevalue}>Rp. 4.500.000</p>
                </div>
                <div className={styles.addPrice}>
                  <p className={styles.priceTitle}>Biaya Utama</p>
                  <p className={styles.pricevalue}>Rp. 4.500.000</p>
                </div>
                <div className={styles.totalPrice}>
                  <p className={styles.priceTitle}>Total</p>
                  <p className={styles.pricevalue}>Rp. 4.500.000</p>
                </div>
              </div>
              <div className={styles.btnCheckoutContainer}>
                <Link
                  to={{
                    pathname: "/",
                  }}
                  className={styles.btnCheckoutenabled}
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default DetailProduct;
