import React from "react";
import { isLogin } from "../../utils/auth";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <>
      {isLogin === true ? (
        <div className={styles.afterLoginWrapper}>
          <h1>after login</h1>
        </div>
      ) : (
        <div className={styles.beforeLoginWrapper}>
          <h1>before login</h1>
        </div>
      )}
    </>
  );
}

export default Navbar;
