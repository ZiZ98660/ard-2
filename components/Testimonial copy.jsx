import React from "react";
import { TitleSm } from "./Title";
import Link from "next/link";
import { testimonial2 } from "@/public/assets/data/dummydata";
import { HiOutlineArrowRight } from "react-icons/hi";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<div className="slick-arrow">
			<button className="next" onClick={onClick}>
				<RiArrowRightSLine size={25} />
			</button>
		</div>
	);
}

function SamplePrevArrow(props) {
	const { onClick } = props;
	return (
		<div className="slick-arrow">
			<button className="prev" onClick={onClick}>
				<RiArrowLeftSLine size={25} />
			</button>
		</div>
	);
}

const Testimonial2 = () => {
	const settings = {
		className: "center",
		// centerMode: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		focusOnSelect: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<section className="testimonial !mb-4 flex justify-center">
				<div className="container">
					<div className="heading-title !py-0 text-[#345030] !pb-3">
						<TitleSm title="OUR INNOVATION FRAMEWORK" />
					</div>
					<span>
						Our customizable Innovation Framework combines the creative
						problem-solving power of LEGO SeriousPlay with the structured,
						actionable approach of Kickbox Innovation methodology. Designed to
						fit your strategy and goals, it features:
					</span>
					<div className="cards">
						<Slider {...settings}>
							{testimonial2.map((user, i) => (
								<div key={i}>
									<div className="card">
										<div className="image">
											{/* <div className='img'> */}
											{/* <img src={user.cover} alt='' /> */}
											{/* </div> */}
											<div className="img-text">
												<h3>{user.name}</h3>
												{/* <span>{user.post}</span> */}
											</div>
										</div>
										<div className="details">
											<p>{user.desc}</p>
											<Link href="/#">
												VIEW CASE <HiOutlineArrowRight className="link-icon" />
											</Link>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</section>
		</>
	);
};

export default Testimonial2;
