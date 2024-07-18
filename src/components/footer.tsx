"use client";

import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { options } from "@/lib/date-timeOptions";

const myStyle = {
  //   backgroundImage: `url("./Footer.jpeg")`,
  backgroundImage: `url("./Footer2.jpeg")`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
};

const { year, timeZone } = options;

const Footer: FC = () => {
  return (
    <footer
      id="footer"
      className="w-screen relative bg-contain bg-no-repeat h-[20rem]"
    >
      <section
        className="relative bg-cover bg-no-repeat h-[22rem] flex flex-col justify-center items-center"
        style={myStyle}
      >
        <div className="flex flex-row justify-evenly w-full">
          <div className="px-40 bg-blue-500">
            <h1> logo </h1>
          </div>
          <div className="px-40 flex flex-1 justify-center bg-green-600">
            <h1> logo </h1>
          </div>
        </div>
        <h1 className="absolute top-[19rem] font-bold text-xl">
          جميع الحقوق محفوظة
          {new Date().toLocaleString("ar-EG", { year, timeZone })} &copy; لدى
          مركز نظم المعلومات والتحول الرقمى
        </h1>
      </section>
    </footer>
  );
};

export default Footer;
