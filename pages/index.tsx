import React from "react";
import LogoBar from "../components/LogoBar/LogoBar";
import Form from "../components/Form/Form";
import Header from "../components/Header";
import BannerImage from "../components/BannerImage/BannerImage";
import styles from "../styles/index.module.scss";
import Footer from "../components/Footer/Footer";
import FullJumbo from "../components/FullJumbo";
import Publications from "../components/Publications";
import TeslaWinners from "../components/TeslaWinners";

export default function Home() {
  return (
    <div>
      <FullJumbo />

      <Header />

      <div className={styles.center}>
        <Form />
      </div>

      <TeslaWinners />
      <Publications />
      <Footer />
    </div>
  );
}
