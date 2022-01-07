import React from "react";
import Link from "next/link";

const linkClasses = "mx-3 text-gray-500";

export default function Footer() {
  return (
    <div className="flex justify-center mt-10 mb-2">
      <Link href={"/disclaimers"}>
        <a className={linkClasses}>Disclaimers</a>
      </Link>

      <Link href={"/privacy-policy"}>
        <a className={linkClasses}>Privacy Policy</a>
      </Link>
    </div>
  );
}
