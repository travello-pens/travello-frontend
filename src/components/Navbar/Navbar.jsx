import React from "react";
import { Link } from "react-router-dom";
import { isLogin } from "../../utils/auth";
import styles from "./Navbar.module.css";
import { Logo } from "../../assets/assets";
function Navbar() {
  return (
    <>
      {isLogin === true ? (
        <div className={styles.afterLoginWrapper}>
          <h1>after login</h1>
        </div>
      ) : (
        <div className={styles.beforeLoginWrapper}>
          <div className={styles.logo}>
            <img src={Logo} alt="logo" className={styles.logoItem} />
          </div>
          <div className={styles.menu}>
            <Link to="/travel" className={styles.menuLink}>
              Travel Agent
            </Link>
            <Link to="/promo" className={styles.menuLink}>
              Promo Spesial
            </Link>
            <Link to="/blog" className={styles.menuLink}>
              Blog
            </Link>
          </div>
          <div className={styles.auth}>
            <Link to="/signup" className={styles.authRegister}>
              Sign Up
            </Link>
            <Link to="/signin" className={styles.authLogin}>
              Sign In
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
