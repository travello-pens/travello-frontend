import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./MainLayout.module.css";
function MainLayout(props) {
  return (
    <div>
      <Navbar />
      <div className={styles.content}>{props.children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
