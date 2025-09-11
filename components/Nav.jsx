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
import { link } from "@/public/assets/data/dummydata";

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
              {/* <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              Solutions
            </Link> */}

              <div
                onClick={toggleDropDown}
                onMouseEnter={openDropDown}
                // onMouseLeave={closeDropDown}
                className={`${
                  activeLink == "/about-us" ? "activeLink" : "none"
                } cursor-pointer flex gap-x-2 relative`}
              >
                About Us
                <FaCaretDown />
                <DropDown
                  options={link}
                  isOpen={isDropdownOpen}
                  onClose={closeDropDown}
                  closeNav={() => setOpen(false)}
                />
              </div>
              <Link
                href="/membership"
                className={activeLink == "/membership" ? "activeLink" : "none"}
                onClick={() => setOpen(false)}
              >
                Membership
              </Link>

              {/* <Link href='/team' className={activeLink == "/team" ? "activeLink" : "none"}>
              Resources
            </Link> */}

              {/* <Link href='/showcase' className={activeLink == "/showcase" ? "activeLink" : "none"}>
              Showcase
            </Link> */}
              <Link
                href="/blogs"
                className={activeLink == "/blogs" ? "activeLink" : "none"}
                onClick={() => setOpen(false)}
              >
                News & Events
              </Link>

              <Link
                href="/services"
                className={activeLink == "/services" ? "activeLink" : "none"}
                onClick={() => setOpen(false)}
              >
                Resources
              </Link>
              {/* <Link href='/contact' class={activeLink == "/contact" ? "activeLink" : "none"}>
              Contact
            </Link> */}
            </div>
          </nav>
          <button className="button-primary max-800:hidden">contact us</button>
          <button
            className=" hidden max-800:block "
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <AiOutlineClose fill="black" size={25} />
            ) : (
              <RiMenu4Line fill="black" size={25} />
            )}
          </button>
        </div>
      </header>
    </>
  );
};

export default Nav;
