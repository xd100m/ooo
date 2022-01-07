import React from "react";
import Image from "next/image";

export default function BannerImage() {
  return (
    <div>
      <Image
        src={"/tesla-hero-header.jpeg"}
        width={2262}
        height={1048}
        alt={""}
        className="shadow-2xl"
      ></Image>
    </div>
  );
}
