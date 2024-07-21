"use client";

import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { FaFacebookF } from "react-icons/fa";

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
        className="relative bg-cover bg-no-repeat h-[22rem] flex flex-row justify-center items-center"
        style={myStyle}
      >
        <div className="absolute top-0 right-0 w-full h-full bg-gray-600/45 z-10"></div>
        <div className="flex flex-row justify-evenly w-full z-20">
          <div className="px-14 flex flex-col gap-3">
            <Image
              className="rounded-[30px]"
              src="/logo.ico"
              alt="Logo"
              width={170}
              height={50}
            />
            {/* Social Icons */}
            <div className="flex flex-row items-center justify-between">
              <FaFacebookF size={"2rem"} className="text-white w-4 h-6" />
              <FaFacebookF size={"2rem"} className="text-white w-4 h-6" />
              <FaFacebookF size={"2rem"} className="text-white w-4 h-6" />
            </div>
          </div>
          <div className="md:px-40 flex md:flex-1 lg:px-40 lg:flex-1 xl:px-40 xl:flex-1 justify-center bg-green-600">
            <h1> logo </h1>
          </div>
        </div>
        <p className="absolute top-[19.7rem] font-bold xsm:text-xs xs:text-sm sm:text-sm md:text-xl sm:text-balance">
          جميع الحقوق محفوظة
          {new Date().toLocaleString("ar-EG", { year, timeZone })} &copy; لدى
          مركز نظم المعلومات والتحول الرقمى
        </p>
      </section>
    </footer>
  );
};

export default Footer;
