import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { Appstore, GooglePlay, Logo } from "../../assets/assets";
function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.description}>
          <img src={Logo} alt="logo" className={styles.logo} />
          <p className={styles.descriptionText}>Temukan destinasi wisata dengan kemudahan dan berbagai fitur yang disediakan oleh Travello.</p>
          <p className={styles.descriptionText}>Available On</p>
          <div className={styles.logoStore}>
            <img src={Appstore} alt="app store" className={styles.logoStoreItem} />
            <img src={GooglePlay} alt="google play store" className={styles.logoStoreItem} />
          </div>
        </div>
        <div className={styles.companies}>
          <p className={styles.title}>Companies</p>
          <Link to="/" className={styles.listText}>
            Travel Agent
          </Link>
          <Link to="/" className={styles.listText}>
            Today Deals
          </Link>
          <Link to="/" className={styles.listText}>
            Blog
          </Link>
          <Link to="/" className={styles.listText}>
            Contact
          </Link>
          <Link to="/" className={styles.listText}>
            Help
          </Link>
        </div>
        <div className={styles.resource}>
          <p className={styles.title}>Resources</p>
          <Link to="/" className={styles.listText}>
            About Us
          </Link>
          <Link to="/" className={styles.listText}>
            Journey
          </Link>
          <Link to="/" className={styles.listText}>
            Blog
          </Link>
          <Link to="/" className={styles.listText}>
            Contact
          </Link>
          <Link to="/" className={styles.listText}>
            Help
          </Link>
        </div>
        <div className={styles.help}>
          <p className={styles.title}>Help</p>
          <Link to="/" className={styles.listText}>
            House Rules
          </Link>
          <Link to="/" className={styles.listText}>
            Our Teams
          </Link>
          <Link to="/" className={styles.listText}>
            Privacy and Policy
          </Link>
        </div>
        <div className={styles.contact}>
          <p className={styles.title}>Contact Us</p>
          <Link to="/" className={styles.listText}>
            (031) 5678478
          </Link>
          <Link to="/" className={styles.listText}>
            Jl. Dinoyo No.42-44, Surabaya
          </Link>
          <Link to="/" className={styles.listText}>
            halo@travello.com
          </Link>
        </div>
      </div>
      <div className={styles.copyright}>
        <p className={styles.copyText}>Copyright @Travello 2022. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
