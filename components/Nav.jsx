"use client";

import Link from "next/link";
import { TitleLogo } from "./Title";
import { usePathname } from "next/navigation";
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
	const [isMobile, setIsMobile] = useState(false);

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

	const pathname = usePathname();
	useEffect(() => {
		setActiveLink(pathname);
	}, [pathname]);

	// Detect mobile screen size
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 800);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	// Limit news dropdown items to 3 and add "See more..." option
	const limitedNews = news.map((category) => ({
		...category,
		children: [
			...category.children.slice(0, 3), // Only show first 3 items
			{
				title: "See more...",
				link: "/news",
				target: "_self"
			}
		]
	}));
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
            } max-800:!justify-center max-800:!items-center`}
          >
            <div
              // className="max-[800px]:hidden"
              className="flex justify-center gap-x-12 max-md:!gap-x-4  max-800:!w-full max-800:!grid max-800:!grid-cols-1 max-800:!gap-y-12 max-800:!place-items-center max-800:!justify-items-center"
            >
              {isMobile ? (
                // Mobile navigation - simple links only
                <>
                  <Link
                    href="/"
                    className={`max-800:!text-center max-800:!justify-self-center ${
                      activeLink == "/" ? "activeLink" : "none"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/faqs"
                    className={`max-800:!text-center max-800:!justify-self-center ${
                      activeLink == "/faqs" ? "activeLink" : "none"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/news"
                    className={`max-800:!text-center max-800:!justify-self-center ${
                      activeLink == "/news" ? "activeLink" : "none"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    News and Events
                  </Link>
                  <Link
                    href="https://mailchi.mp/f5ba93d7d672/meddigest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-800:!text-center max-800:!justify-self-center"
                    onClick={() => setOpen(false)}
                  >
                    Subscribe to Our Newsletter
                  </Link>
                </>
              ) : (
                // Desktop navigation - with dropdowns
                <>
                  <Link
                    href="/"
                    className={activeLink == "/" ? "activeLink" : "none"}
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                  <DropDown
                    options={link.map((item) => ({
                      ...item,
                      link:
                        item.link.startsWith("#") && pathname !== "/"
                          ? `/${item.link}`
                          : item.link,
                    }))}
                    title="About Us"
                    activeLink={'/about-us'}
                    onAnyLinkClick={() => setOpen(false)}
                  />
                  <DropDown
                    options={limitedNews}
                    title="News and Events"
                    activeLink={activeLink}
                    onAnyLinkClick={() => setOpen(false)}
                  />
                  <DropDown
                    options={resources}
                    title="Resources"
                    activeLink={activeLink}
                    onAnyLinkClick={() => setOpen(false)}
                  />
                </>
              )}
            </div>
          </nav>
        <a
          href={
            typeof window !== "undefined" && /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
              ? "googlegmail:///co?to=sec.arddelsuth@gmail.com"
              : "https://mail.google.com/mail/?view=cm&to=sec.arddelsuth@gmail.com"
          }
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button-primary max-800:hidden">
              contact us
            </button>
          </a>
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
