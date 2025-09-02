import Text from "@/components/Text";
import { TitleSm } from "@/components/Title";
import { DotIcon } from "@/public/assets/icons/icons";
import React from "react";

const DiscoverKickBox = () => {
	return (
		<>
			<section className="agency bg-top">
				<div className=" sass-container !pb-28">
					<div className="heading-title">
						<TitleSm title="DISCOVER KICKBOX: PROGRAM OUTLINE" />
					</div>
					<div className="desc">
						{/* <Text
            text={`Training Offerings`}
            className={'font-bold !text-lg'}
            /> */}
						<Text text={`Overview:`} className={"font-bold !text-lg"} />
						<p className={"!text-lg"}>
							Kickbox is an all-in-one solution designed to enhance employee
							engagement, idea management, and idea execution. This program,
							developed by Adobe and refined by Swisscom, provides a structured
							methodology for fostering innovation within organizations.
						</p>
						<br />

						<Text
							text={`Program Structure:`}
							className={"font-bold !text-lg"}
						/>
						<div className="!pl-6">
							<span className="font-[500] inline-flex items-baseline gap-x-2  ">
								{" "}
								<DotIcon className={"flex self-center"} color={"black"} />{" "}
								<span className="!pt-[1.8px]">RedBox (Inspiration):</span>
							</span>{" "}
							<span className="">{`Introduction to innovation, idea generation, and basic tools.`}</span>
						</div>
						<div className="!pl-6">
							<span className="font-[500] inline-flex items-baseline gap-x-2  ">
								{" "}
								<DotIcon className={"flex self-center"} color={"black"} />{" "}
								<span className="!pt-[1.8px]">BlueBox (Validation):</span>
							</span>{" "}
							<span className="">{`Detailed planning, testing, and validation of ideas.`}</span>
						</div>
						<div className="!pl-6">
							<span className="font-[500] inline-flex items-baseline gap-x-2  ">
								{" "}
								<DotIcon className={"flex self-center"} color={"black"} />{" "}
								<span className="!pt-[1.8px]">GoldBox (Implementation):</span>
							</span>{" "}
							<span className="">
								{"Full-scale implementation and market testing."}
							</span>
						</div>
						<br />
						<Text
							text={`Expected Benefits:`}
							className={"font-bold !text-lg"}
						/>
						<div className="!pl-6">
							<span className="font-[500] inline-flex items-baseline gap-x-2  ">
								{" "}
								<DotIcon className={"flex self-center"} color={"black"} />{" "}
								<span className="!pt-[1.8px]">Empowered Employees:</span>
							</span>{" "}
							<span className="">{`Equip employees with the tools and confidence to innovate.`}</span>
						</div>
						<div className="!pl-6">
							<span className="font-[500] inline-flex items-baseline gap-x-2  ">
								{" "}
								<DotIcon className={"flex self-center"} color={"black"} />{" "}
								<span className="!pt-[1.8px]">Increased Innovation:</span>
							</span>{" "}
							<span className="">{`Foster a culture of continuous improvement and creative problem-solving.`}</span>
						</div>
						<div className="!pl-6">
							<span className="font-[500] inline-flex items-baseline gap-x-2  ">
								{" "}
								<DotIcon className={"flex self-center"} color={"black"} />{" "}
								<span className="!pt-[1.8px]">ROI Maximization:</span>
							</span>{" "}
							<span className="">
								{
									"Structured approach ensures resources are effectively used for high-impact projects."
								}
							</span>
						</div>
						<div className="!pl-6">
							<span className="font-[500] inline-flex items-baseline gap-x-2  ">
								{" "}
								<DotIcon className={"flex self-center"} color={"black"} />{" "}
								<span className="!pt-[1.8px]">Collaborative Environment:</span>
							</span>{" "}
							<span className="">
								{"Encourages teamwork and cross-departmental collaboration."}
							</span>
						</div>
						<br />

						<Text text={`Why Sign Up?`} className={"font-bold !text-lg"} />
						<p className={"!text-lg !pl-3 flex items-baseline gap-x-3"}>
							<DotIcon className={"w-[1em]"} color={"black"} />
							Join leading companies like Swisscom and Siemens Energy in
							transforming ideas into market-ready products.
						</p>
						<p className={"!text-lg !pl-3 flex items-baseline gap-x-3"}>
							<DotIcon className={"w-[1em]"} color={"black"} />
							Gain access to a proven methodology that increases innovation
							success rates.
						</p>
						<p className={"!text-lg !pl-3 flex items-baseline gap-x-3"}>
							<DotIcon className={"w-[1em]"} color={"black"} />
							Enhance your organization's ability to adapt and thrive in a
							competitive market.
						</p>
						<br />
						<br />
						<br />
						<br />
					</div>
				</div>
			</section>
		</>
	);
};

export default DiscoverKickBox;
