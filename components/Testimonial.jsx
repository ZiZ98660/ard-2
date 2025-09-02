"use client";
import React from "react";
import { Title, TitleSm } from "./Title";
import Link from "next/link";
import { card_data, testimonial } from "@/public/assets/data/dummydata";
import { HiOutlineArrowRight } from "react-icons/hi";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Text from "./Text";
import { TestimonialCard } from "./Card";

function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<div className="slick-arrow">
			<button className="next !bg-green-300" onClick={onClick}>
				<RiArrowRightSLine size={25} />
			</button>
		</div>
	);
}

function SamplePrevArrow(props) {
	const { onClick } = props;
	return (
		<div className="slick-arrow">
			<button className="!prev !bg-green-300" onClick={onClick}>
				<RiArrowLeftSLine size={25} />
			</button>
		</div>
	);
}

const Testimonial = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	};
	return (
		<>
			<section className=" sass-container !mt-10 !mb-16 ">
				<div className="text-center !pt-2 !pb-28 ">
					<Title
						title="Best-in-Class Innovation management experts"
						className={" text-center !pb-10"}
					/>
					<div className="text-dark">
						Recognised by the G2 Crowd as innovation management software meeting
						the requirements for enterprises the best, our team of innovation
						experts has supported companies around the globe to launch and scale
						their KICKBOX programs.
					</div>
					<div className="!pt-6">
						Our specialists make sure that all your specific needs are attended
						to, and our in-house designers translate this into an experience
						that makes your program unique.
					</div>
				</div>
				<div className="w-full grid-3 !pb-20">
					<img
						src="/assets/images/first.png"
						className="w-[7.5em] flex justify-self-center"
						alt=""
					/>
					<img
						src="/assets/icons/second.svg"
						className="w-[7.5em] flex justify-self-center "
						alt=""
					/>
					<img
						src="/assets/images/third.png"
						className="w-[7.5em] flex justify-self-center "
						alt=""
					/>
				</div>

				<div className="mt-6">
					{card_data.map((cd, i) => (
						<TestimonialCard
							key={i}
							profile={cd.profile}
							name={cd.name}
							position={cd.position}
							company={cd.company}
							remark={cd.remark}
							logo={cd.logo}
						/>
					))}
				</div>

				<div className="bg-primary-200 rounded-[10px] p-10 items-center grid-custom_1">
					<img
						loading="lazy"
						src="/assets/images/mauro.jpg"
						alt=""
						width={200}
						height={200}
						className="rounded-[10px] w-full h-full"
					/>

					<div className="!py-3">
						<Title title={"Get Started Now"} className={"!text-light"} />
						<div>
							<Text
								text={
									"Have your own bottom-up innovation program implemented in 3 months"
								}
								className={"!text-light "}
							/>
						</div>
						<button className="!py-[10px] !mt-5 bg-[#00dc93] rounded-lg !px-[30px]">
							Let's talk
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Testimonial;
