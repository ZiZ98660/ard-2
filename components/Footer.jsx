import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
	AiFillBehanceCircle,
	AiFillInstagram,
	AiFillLinkedin,
	AiFillMessage,
	AiFillTwitterSquare,
} from "react-icons/ai";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<footer className="bg-[#a0d9a2]">
				<div className="sass-container  ">
					<div className="grid-4">
						<div className="logo">
							<img
								src={"/assets/images/logo.png"}
								className="w-[3.5em] !mx-auto !mb-4"
								alt="capital growth academy"
							/>

							{/* <div
              className="!text-[14px] !text-[#141a15a1] !pb-10 grid gap-y-6"
              >
                <div
                className="flex gap-x-2 "
                >
                  {<FaMapMarkerAlt
                  size={'22px'}
                  color="#2fca96"
                  />}
                  <span
                  // className="!w-[25pc] "
                  >PLOT 808 AKIN MATEOLA STREET, AMUWO-ODOFIN G.R.A, LAGOS, NIGERIA</span>
                </div>
                <div
                className="flex gap-x-2"
                >
                  {<FaPhone
                  color="#2fca96"

                  // size={'25px'}
                  />}
                  <span>
                  +234 708 645 8308, +234 706 247 5899
                  </span>
                </div>
                <div
                className="flex gap-x-2"
                >
                  {<FaEnvelope
                  color="#2fca96"

                  // size={'25px'}
                  />}
                  <span>
                  info@capitalgrowthacademy.com
                  </span>
                </div>
              </div> */}
							{/* <button className='button-primary'>Request for quote</button> */}
							<div className=" !pt-24 flex justify-center">
								<div>
									<Link
										href="https://www.instagram.com/capitalgrowth_academy?igsh=MTczNTRnZmZweDZvaQ%3D%3D&utm_source=qr"
										target="_blank"
									>
										<AiFillInstagram size={40} />
									</Link>
								</div>
								<div>
									<Link href="https://x.com/capitalgrowth_n?s=21&t=GCOoURW0YZ9Y9vDX14vLBA">
										<AiFillTwitterSquare size={40} className="rounded-lg" />
									</Link>
								</div>
							</div>
						</div>
						<ul>
							<h3>Solutions</h3>
							<li>
								<Link href="/solutions/kickbox">KICKBOX</Link>
							</li>
							<li>
								<Link href="/solutions/lsp">LEGO®️ SERIOUS PLAY®️</Link>
							</li>
							<li>
								<Link href="/">Training</Link>
							</li>
							<li>
								<Link href="/">Consultancy</Link>
							</li>
						</ul>
						<ul>
							<h3>Resources</h3>
							<li>
								<Link href="/blogs">Blog</Link>
							</li>
							<li>
								<Link href="/">Case studies</Link>
							</li>
							<li>
								<Link href="/">Webinars</Link>
							</li>
						</ul>
						<ul>
							<h3>About Capital Growth</h3>
							<li>
								<Link href="/about-us">About us</Link>
							</li>
							<li>
								<Link href="/">Open positions</Link>
							</li>
							<li>
								<Link href="/faqs">FAQ</Link>
							</li>
							<li>
								<Link href="/">Demo</Link>
							</li>
							<li>
								<Link href="/">Contact Us</Link>
							</li>
							<li>
								<Link href="/">Terms and conditions</Link>
							</li>
							<li>
								<Link href="/">Privacy policy</Link>
							</li>
						</ul>
					</div>
					<div className="legal  grid-2 py">
						<div className="text">
							<span>© 2024 ALL RIGHTS RESERVED.</span>
						</div>
						<div className="connect">
							<span>
								{" "}
								CAPITAL GROWTH ACADEMY PLOT 808 AKIN MATEOLA STREET,
								AMUWO-ODOFIN G.R.A, LAGOS, NIGERIA
							</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
