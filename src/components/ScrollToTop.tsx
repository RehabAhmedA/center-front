"use client";

import type { FC } from "react";
import { useState, useEffect } from "react";
import { ArrowUpToLine } from "lucide-react";
import { FaArrowAltCircleUp } from "react-icons/fa";

import { Button } from "@/components/ui/button";

const ScrollToTop: FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  return (
    <>
      {showTopBtn && (
        <Button
          onClick={goToTop}
          className="z-50 fixed bottom-7 left-7 hover:text-background opacity-90 rounded-full h-14 w-14 shadow-md"
          size="icon"
        >
          <FaArrowAltCircleUp className="h-14 w-14" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
