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

const Footer = () => {
	return (
    <>
      <footer className="bg-[#c6c6f7d2]">
        <div className="sass-container  ">
          <div className="grid-4">
            <div className="logo">
              <img
                src={"/assets/images/logo.png"}
                className="w-[3.5em] !mx-auto !mb-4"
                alt="ard delsuth"
              />
              <div className=" !pt-24 justify-center">
                <span className={"!text-dark !text-center !text-[16px] pb-5"}>
                  CONTACT:
                </span>
                <div className="flex gap-x-2 items-center">
                  <AiFillPhone />
                  <span className={"!text-dark !text-center !text-sm"}>
                    +234-902-228-5878
                  </span>
                </div>
                <span className={"!text-dark !text-center !text-[16px] py-5"}>
                  SOCIAL:
                </span>
                <div className="flex gap-x-2 ">
                  <div>
                    <Link href="http://x.com/ard_delsuth">
                      <AiFillTwitterSquare size={40} className="rounded-lg" />
                    </Link>
                  </div>
                  <div>
                    <Link href="sec.arddelsuth@gmail.com">
                      <AiFillMail size={40} className="rounded-lg" />
                    </Link>
                  </div>
                  <div>
                    <Link href="http://pinterest.com/arddelsuth">
                      <FaPinterestSquare size={40} className="rounded-lg" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <ul>
              <h3>Useful Links</h3>
              <li>
                <Link href="/membership">Membership</Link>
              </li>
              <li>
                <Link href="/">Consultancy</Link>
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
          </div>
          <div className="legal  grid-2 py">
            <div className="text">
              <span>© 2025 ALL RIGHTS RESERVED.</span>
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
