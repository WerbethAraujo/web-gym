"use client";

import Link from "next/link";
import Nav from "./nav";
import MobileNav from "./mobileNav";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed max-w-[1920px] top-0 w-full bg-primary-200 h-[100px] transition-all z-50`}
    >
      <div className="container max-auto h-full flex items-center justify-between">
        <Link href="">
          <Image
            src={"/assets/img/logo.png"}
            width={177}
            height={55}
            alt="logo"
          />
        </Link>
        {/* Mobile Nav  */}
        <MobileNav
          containerStyles={`${headerActive ? "top-[90px]" : "top-[124px]"}
          ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          }
           flex flex-col text-center transition-all text-base font-medium gap-8 fixed bg-primary-200 w-full left-0 top-[124px] xl:hidden text-white`}
        />

        {/* Desktop Nav  */}
        <Nav containerStyles="text-white py-12 flex gap-4 hidden xl:flex text-base uppercase font-medium" />

        <div className="flex items-center gap-4">
          <div className="text-white flex items-center gap-4">
            <button className="hover:text-red-500 transition-all text-base uppercase font-medium">
              Login
            </button>
            <button className="hover:text-red-500 transition-all text-base uppercase font-medium">
              Register
            </button>
          </div>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="text-white xl:hidden"
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
