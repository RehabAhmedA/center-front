"use client";

import type { FC } from "react";
// import { useRouter } from "next/router";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";

// import { GitHubLogoIcon } from "@radix-ui/react-icons";

import MobileNavFragment from "@/components/MobileNavFragment";
import ModeToggle from "@/components/mode-toggle";
//import { LogoIcon } from "@/components/Icons";

import { navbarLinksList, NavProps } from "@/config/nav";
// import { siteConfig } from "@/config/site";
// const { title } = siteConfig;

const Navbar: FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  // console.log(pathname);
  // console.log(typeof pathname);

  // const subpage = pathname.split("/")?.[1];

  // console.log(subpage);

  // const activeLink = (type: string) => {
  //   let classes = `text-[17px] text-muted-foreground hover:text-primary p-2
  //   ${buttonVariants({
  //     variant: "ghost",
  //     size: "lg",
  //   })}`;
  //   console.log(type);
  //   if (type === subpage) {

  //     classes = `text-[17px] text-muted-foreground hover:text-primary p-2
  //   ${buttonVariants({
  //     variant: "ghost",
  //     size: "lg",
  //   })} bg-green-500`;
  //   }

  //   return classes;
  // };

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      {/* Change when lang chang */}
      <NavigationMenu className="mx-auto" dir="rtl">
        <NavigationMenuList className="container h-16 px-4 w-screen flex justify-between">
          {/* desktop */}
          <div className="xsm:hidden w-full flex items-center justify-between">
            <NavigationMenuItem className="font-bold flex">
              <Link
                href="/"
                className="xsm:hidden flex flex-row font-bold text-xl"
              >
                <Image
                  src="/logo.png"
                  className="rounded-full"
                  width={70}
                  height={70}
                  alt="logo"
                />
                {/* <LogoIcon /> */}
                {/* <span className="hidden md:block px-4">{title}</span> */}
              </Link>
            </NavigationMenuItem>

            <nav className="xsm:hidden flex">
              {navbarLinksList.map((route: NavProps, i) => (
                <Link
                  key={i}
                  href={route.href}
                  //className={activeLink(route.href)}
                  className={`${
                    pathname === route.href
                      ? `bg-primary/70 hover:text-background`
                      : `hover:text-primary`
                  }
                  text-[17px] text-muted-foreground rounded-md px-4 py-2
                  `}
                >
                  <p className="font-bold">{route.labelAr}</p>
                </Link>
              ))}
            </nav>
            <div className="xsm:hidden flex items-center px-2">
              <ModeToggle />
            </div>
          </div>

          {/* mobile */}
          <div className="xsm:w-screen xsm:flex xsm:justify-between hidden">
            <div className="flex items-center justify-center">
              <MobileNavFragment />
            </div>
            <div className="flex items-center justify-center">
              <Link href="/" className="font-bold text-base">
                <Image
                  className="rounded-full"
                  src="/logo.png"
                  width={60}
                  height={60}
                  alt="logo"
                />
                {/* <LogoIcon /> */}
                {/* <span className="hidden md:block px-4">{title}</span> */}
              </Link>
            </div>

            <div className="flex items-center">
              <ModeToggle />
            </div>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
