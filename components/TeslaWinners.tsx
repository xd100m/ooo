import React from "react";
import styles from "./TeslaWinners.module.scss";

const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

export default function TeslaWinners() {
  return (
    <div className={styles.container}>
      <p className="text-4xl text-center font-bold mb-5">
        Recent Tesla Winners
      </p>
      {images &&
        images.map((IMG, i) => (
          <div
            key={i}
            style={{ backgroundImage: `url(/teslawinners/${IMG})` }}
            className={styles.winner}
          ></div>
        ))}
    </div>
  );
}
