import Link from "next/link";
import { TitleLogo, TitleSm } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
	AiFillBehanceCircle,
	AiFillInstagram,
	AiFillLinkedin,
	AiFillMail,
	AiFillMessage,
	AiFillPhone,
	AiFillTwitterSquare,
} from "react-icons/ai";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPinterestSquare } from "react-icons/fa";
import { MailIcon, PinterestIcon, TwitterIcon } from "@/public/assets/icons/icons";

const Footer = () => {
	return (
    <>
      <footer className="bg-[#c6c6f7d2]">
        <div className="sass-container  ">
          <div className="grid-footer">
            <div className="logo">
              <img
                src={"/assets/images/logo.png"}
                className="w-[6em]"
                alt="ard delsuth"
              />
              <div className="justify-center">
                {/* <span className={"!text-dark !text-center !text-[16px] pb-5"}>
                  CONTACT:
                </span>
                <div className="flex gap-x-2 items-center">
                  <AiFillPhone />
                  <span className={"!text-dark !text-center !text-sm"}>
                    +234-902-228-5878
                  </span>
                </div> */}
                <span
                  className={
                    "!text-dark !text-center underline !text-[14px] py-5"
                  }
                >
                  GET IN TOUCH
                </span>
                <div className="flex gap-x-2 ">
                  <div>
                    <Link href="http://x.com/ard_delsuth">
                      <TwitterIcon className=" size-8" />
                    </Link>
                  </div>
                  <div>
                    <Link href="https://mail.google.com/mail/?view=cm&to=sec.arddelsuth@gmail.com" target="_blank" rel="noopener noreferrer">
                      <MailIcon className=" size-8" />
                    </Link>
                  </div>
                  <div>
                    <Link href="http://pinterest.com/arddelsuth">
                      <PinterestIcon className=" size-8" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-3">
              <ul>
                <h3>About ARD DELSUTH</h3>
                <li>
                  <Link href="/about-us/who-we-are">Who we are</Link>
                </li>
                <li>
                  <Link href="/about-us/what-we-do">What we do</Link>
                </li>
                <li>
                  <Link href="/">Open positions</Link>
                </li>
                <li>
                  <Link href="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link href="/">Contact Us</Link>
                </li>
              </ul>
              <ul>
                <h3>Resources</h3>
                <li>
                  <Link href="/events">Events</Link>
                </li>
                <li>
                  <Link href="/">News</Link>
                </li>
                <li>
                  <Link href="/">Webinars</Link>
                </li>
                <li>
                  <Link href="/">Testimonials</Link>
                </li>
              </ul>
              <ul>
                <h3>Useful Links</h3>
                <li>
                  <Link href="/membership">Membership</Link>
                </li>
                <li>
                  <Link href="/">Consultancy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="legal  grid-2 pt-14 pb-8">
            <div className="text">
              <span>© 2025 ALL RIGHTS RESERVED.</span>
              <div className="">
                <img
                  className=""
                  loading="lazy"
                  src={"/assets/images/Momentum.png"}
                  alt=""
                />
                <span>Powered by Momentum Healthcare Services</span>
              </div>
            </div>
            <div className="connect">
              <span>
                {" "}
                ARD Secretariat, Ground Floor, Auditorium Building, Delta State
                University Teaching Hospital, Otefe Road, Off Benin-Warri
                Expressway, Oghara, Delta State, Nigeria.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
