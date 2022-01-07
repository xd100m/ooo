import React from "react";
import Image from "next/image";

export default function LogoBar() {
  return (
    <div className="text-center">
      <Image src={"/logo.png"} width={187.5} height={37.5} alt={""}></Image>
    </div>
  );
}
