import React from "react";
import Image from "next/image";
import styles from "./FullJumbo.module.scss";

export default function FullJumbo() {
  return (
    <div className={`${styles.bg}`}>
      <div
        className={`${styles.overlay} flex flex-col items-center justify-center lg:justify-center`}
      >
        <div className={styles.banner}>
          <p
            className={`text-5xl lg:text-6xl px-3 pb-3 font-bold text-blue-600`}
          >
            Easily Win a FREE Tesla
          </p>
          <p className="text-2xl px-3 text-white">
            No Purchase Necessary - Easy to Enter - Free Opportunity
          </p>
        </div>
      </div>
    </div>
  );
}
