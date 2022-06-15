import React, { useState } from "react";
//styles
import styles from "./Checkout.module.css";
import { Form } from "react-bootstrap";
//image/icon
import { BsCalendarDateFill } from "react-icons/bs";
import MainLayout from "../../layout/MainLayout/MainLayout";
import Modal from "react-bootstrap/esm/Modal";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Checkout(props) {
  const [modalSuccesShow, setModalSuccesShow] = useState(false);
  return (
    <MainLayout>
      {/* content */}
      <div className={styles.contentWrapper}>
        <h5 className={styles.checkoutTitle}>Checkout</h5>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <div className={styles.productDetail}>
              <div className={styles.productImage}>
                <img
                  src="https://cdn1-production-images-kly.akamaized.net/VNcWu_hwhIuQiscc8cYdUN5OSmc=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3159012/original/037760500_1592803600-Ilustrasi_Bali.jpg"
                  alt="gambar produk"
                  className={styles.productImageItem}
                />
              </div>
              <div className={styles.productDescription}>
                <h5 className={styles.productTitle}>Tanah Lot</h5>
                <div className={styles.productMenu}>
                  <p className={styles.menuItem}>By Pesona Indonesia</p>
                </div>
                <h5 className={styles.productPrice}>Rp. 4.500.000</h5>
                <div className={styles.dateReservation}>
                  <BsCalendarDateFill className={styles.dateIcon} />
                  <p className={styles.dateReservationValue}>19-02-2022</p>
                </div>
                <Form.Group className={styles.formgroupNote}>
                  <Form.Label>Catatan</Form.Label>
                  <Form.Control name="note" type="text" placeholder="Masukan notes / catatan" />
                </Form.Group>
              </div>
            </div>
            <div className={styles.dividerLeft}></div>
            <div className={styles.customerInformation}>
              <h5 className={styles.customerInformationTitle}>Informasi Pengguna</h5>
              <p className={styles.requiredFill}>*wajib diisi</p>
              <div className={styles.reservationData}>
                <div className={styles.reservationDataTitle}>
                  <div className={styles.numberTitle}>1</div>
                  <h5 className={styles.textTitle}>Data pemesan</h5>
                </div>
                <div className={styles.formWrapper}>
                  <Form.Group className={styles.formgroup}>
                    <Form.Label>Nama pemesan</Form.Label>
                    <Form.Control name="order_name" type="text" placeholder="Masukkan nama lengkap anda" />
                  </Form.Group>
                  <Form.Group className={styles.formgroup}>
                    <Form.Label>Nama Reservasi</Form.Label>
                    <Form.Control name="reservation_name" type="text" placeholder="Masukkan nama reservasi pesanan" />
                  </Form.Group>
                  <Form.Group className={styles.formgroup}>
                    <Form.Label>No telpon</Form.Label>
                    <Form.Control name="phone_number" type="text" placeholder="Masukkan nomer telepon anda" />
                  </Form.Group>
                  <Form.Group className={styles.formgroup}>
                    <Form.Label>Email pengguna</Form.Label>
                    <Form.Control name="email" type="text" placeholder="Masukkan email anda" />
                  </Form.Group>
                  <Form.Group className={styles.formgroup}>
                    <Form.Label>No whatsapp</Form.Label>
                    <Form.Control name="whatsapp_number" type="text" placeholder="Masukkan no wa anda" />
                  </Form.Group>
                </div>
              </div>
              {/* <div className={styles.reservationData}>
                <div className={styles.reservationDataTitle}>
                  <div className={styles.numberTitle}>2</div>
                  <h5 className={styles.textTitle}>Alamat pemesan</h5>
                </div>
                <div className={styles.formWrapper}>
                  <Form.Group className={styles.formgroup}>
                    <Form.Label>Nama perusahaan</Form.Label>
                    <Form.Control name="company_name" type="text" placeholder="Masukkan nama perusahaan anda" />
                  </Form.Group>
                  <Form.Group className={styles.formgroup}>
                    <Form.Label>Alamat pemesanan</Form.Label>
                    <Form.Control name="address" type="text" placeholder="Masukkan alamat anda" />
                  </Form.Group>
                  <Form.Group className={styles.formgroup}>
                    <Form.Label>Provinsi</Form.Label>
                    <Form.Control name="province" type="text" placeholder="Masukkan alamat anda" />
                  </Form.Group>
                  <Form.Group className={styles.formgroup}>
                    <Form.Label>Kota</Form.Label>
                    <Form.Control name="city" type="text" placeholder="Masukkan alamat anda" />
                  </Form.Group>
                </div>
              </div> */}
              <div className={styles.reservationData}>
                <div className={styles.reservationDataTitle}>
                  <div className={styles.numberTitle}>3</div>
                  <h5 className={styles.textTitle}>Detail pembayaran</h5>
                </div>
                <div className={styles.formWrapperPayment}>
                  <Form.Select name="payment" className={styles.optionPayment}>
                    <option>Transfer ATM/BANK</option>
                    <option value="MANDIRI">MANDIRI</option>
                    <option value="BNI">BNI</option>
                    <option value="BRI">BRI</option>
                  </Form.Select>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.summaryReservation}>
              <h4 className={styles.summaryReservationTitle}>Ringkasan Pesanan</h4>
              <div className={styles.mainPrice}>
                <h5 className={styles.priceTitle}>Biaya Utama</h5>
                <p className={styles.pricevalue}>Rp. 4.500.000</p>
              </div>
              <div className={styles.divider}></div>
              <h5 className={styles.addPriceTitle}>Biaya Tambahan</h5>
              <div className={styles.addPrice}>
                <p className={styles.priceTitle}>Pajak</p>
                <p className={styles.pricevalue}>Rp. 100.000</p>
              </div>

              <div className={styles.divider}></div>
              <h5 className={styles.totalTitle}>Total Pemesanan</h5>
              <p className={styles.totalValue}>Rp. 4.500.000</p>
              <button onClick={() => setModalSuccesShow(true)} className={styles.btnPayment}>
                Selesai
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* succes modal */}
      <Modal size="md" show={modalSuccesShow}>
        <div className={styles.modalSucces}>
          <div className={styles.ModalImageSucces}>
            <AiOutlineCheckCircle className={styles.iconSucces} />
          </div>
          <div className={styles.ModalTextSucces}>
            <h5 className={styles.modalTitleSucces}>Pembayaran Berhasil!</h5>
            <p className={styles.modaldescSucces}>Silahkan cek email anda, untuk melihat detail transaksi</p>
          </div>
          <button onClick={() => window.location.reload()} className={styles.btnCloseModalSucces}>
            Kembali
          </button>
        </div>
      </Modal>
    </MainLayout>
  );
}

export default Checkout;
