"use client";

import type { FC } from "react";
import { useState } from "react";
import Link from "next/link";

import { Menu, Search } from "lucide-react";

import { Input } from "@/components/ui/input";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { navbarLinksList, NavProps } from "@/config/nav";

// import { siteConfig } from "@/config/site";
// const { title } = siteConfig;

const MobileNavFragment: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="px-2">
        <Menu
          className="flex md:hidden h-5 w-5"
          onClick={() => setIsOpen(true)}
        >
          {/* <span className="sr-only">Menu Icon</span> */}
        </Menu>
      </SheetTrigger>
      {/* Sheet side according to page lang */}
      <SheetContent>
        <SheetHeader>
          {/* <SheetTitle className="font-bold text-xl">{title}</SheetTitle> */}
        </SheetHeader>
        <nav className="flex flex-col justify-center items-center gap-2 mt-4">
          {navbarLinksList.map(({ href, labelAr }: NavProps) => (
            <Link
              key={labelAr}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`font-bold hover:text-primary ${buttonVariants({ variant: "ghost" })}`}
            >
              {labelAr}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavFragment;
