"use client";

import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import "@/styles/globals.css";
import DropDown from "./DropDown/page";
import { FaCaretDown } from "react-icons/fa";
import { link, news, resources } from "@/public/assets/data/dummydata";

const Nav = () => {
	const [activeLink, setActiveLink] = useState("");
	const [open, setOpen] = useState(false);

	const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
	// const { isLoggedin, toggleSideBar } = useBuffStore();

	const openDropDown = () => {
		setIsDropdownOpen(true);
	};
	const toggleDropDown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const closeDropDown = () => {
		setIsDropdownOpen(false);
	};

	const router = useRouter();
	useEffect(() => {
		setActiveLink(router.pathname);
	}, [router.pathname]);
	return (
    <>
      <header>
        <div className="sass-container">
          <div className="logo">
            <Link href="/">
              {/* <TitleLogo title='creative' caption='7' className='logomin' /> */}
              <img
                src={"/assets/images/logo.png"}
                className="w-[2.2em]"
                alt="ard delsuth"
              />
            </Link>
          </div>
          <nav
            className={` flex  ${open ? "openMenu" : "closeMenu"} ${
              !open ? "max-800:!hidden" : ""
            }`}
          >
            <div
              // className="max-[800px]:hidden"
              className="flex justify-center gap-x-12 max-md:!gap-x-4  max-800:!w-full max-800:!grid max-800:!gap-y-12 max-800:!place-content-center "
            >
              <Link
                href="/"
                className={activeLink == "/" ? "activeLink" : "none"}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <DropDown options={link} title="About Us" />
              <DropDown options={news} title="News and Events" />
              <DropDown options={resources} title="Resources" />
            </div>
          </nav>
          <button className="button-primary max-800:hidden">contact us</button>
          <button
            className=" hidden max-800:block "
            onClick={() => setOpen(!open)}
          >
            <span className="relative inline-block w-[25px] h-[25px] transition-all duration-350">
              <span
                className={`absolute inset-0 flex items-center justify-center transition-transform duration-350 ${
                  open ? "opacity-0 scale-90" : "opacity-100 scale-100"
                }`}
                style={{ transitionProperty: "opacity, transform" }}
              >
                <RiMenu4Line fill="black" size={25} />
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transition-transform duration-350 ${
                  open ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionProperty: "opacity, transform" }}
              >
                <AiOutlineClose fill="black" size={25} />
              </span>
            </span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Nav;
