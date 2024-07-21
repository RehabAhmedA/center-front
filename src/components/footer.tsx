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
      className="w-screen relative bg-contain bg-no-repeat h-[20rem] xsm:h-[35rem]"
    >
      <section
        className="relative bg-cover bg-no-repeat h-[22rem] xsm:h-[35rem] flex
                  flex-row md:justify-center items-center xsm:flex-col xsm:gap-2"
        style={myStyle}
      >
        <div className="absolute top-0 right-0 w-full h-full bg-gray-600/45 z-10"></div>
        <div className="flex md:flex-row md:justify-evenly xsm:flex-col xsm:items-center xsm:gap-4 w-full z-20">
          <div className="px-14 flex flex-col gap-3 xsm:py-3">
            <div className="md:w-[170px] md:h-[150]">
              <Image
                className="rounded-[30px]"
                src="/logo.ico"
                alt="Logo"
                width={120}
                height={90}
                sizes="(max-width: 768px) 270vw,  1920px"
              />
            </div>

            {/* Social Icons */}
            <div className="flex flex-row items-center justify-between">
              <FaFacebookF size={"2rem"} className="text-white w-4 h-6" />
              <FaFacebookF size={"2rem"} className="text-white w-4 h-6" />
              <FaFacebookF size={"2rem"} className="text-white w-4 h-6" />
            </div>
          </div>
          <div className="xl:px-40 xl:flex-1 lg:px-40 lg:flex-1 md:px-40 flex md:flex-1 xsm:flex-col xsm:py-3 xsm:px-3 justify-center bg-green-600">
            <h1> روابط مهمة </h1>
            <div className="px-14 flex flex-col gap-3 xsm:py-3">
              <div className="md:w-[170px] md:h-[150]">
                <Image
                  className="rounded-[30px]"
                  src="/logo.ico"
                  alt="Logo"
                  width={120}
                  height={90}
                  sizes="(max-width: 768px) 270vw,  1920px"
                />
              </div>

              {/* Social Icons */}
              <div className="flex flex-row items-center justify-between">
                <FaFacebookF size={"2rem"} className="text-white w-4 h-6" />
                <FaFacebookF size={"2rem"} className="text-white w-4 h-6" />
                <FaFacebookF size={"2rem"} className="text-white w-4 h-6" />
              </div>
            </div>
          </div>
        </div>
        <p className="absolute font-bold top-[19.9rem] text-xl xsm:text-xs xsm:top-[33rem]">
          جميع الحقوق محفوظة
          {new Date().toLocaleString("ar-EG", { year, timeZone })} &copy; لدى
          مركز نظم المعلومات والتحول الرقمى
        </p>
      </section>
    </footer>
  );
};

export default Footer;
