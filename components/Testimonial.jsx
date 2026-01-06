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
      <section id='testimonial' className=" sass-container !mt-10 !mb-16 ">
        <div className="text-center !pt-2 ">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Our Members Say
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="mt-10">
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

        {/* <div className="bg-primary-200 rounded-[10px] p-10 items-center grid-custom_1">
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
				</div> */}
      </section>
    </>
  );
};

export default Testimonial;
