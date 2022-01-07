import React from "react";
import Image from "next/image";
import styles from "./Publications.module.scss";

export default function Publications() {
  return (
    <div className={styles.publications}>
      <Image
        src={"/publications.png"}
        width={860}
        height={322}
        alt="publications"
      ></Image>
    </div>
  );
}
