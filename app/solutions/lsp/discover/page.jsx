import Text from "@/components/Text";
import { TitleSm } from "@/components/Title";
import { DotIcon } from "@/public/assets/icons/icons";
import React from "react";

const DiscoverLSP = () => {
	return (
		<>
			<section className="agency bg-top">
				<div className="sass-container !pb-28">
					<div className="heading-title">
						<TitleSm title="DISCOVER LEGO®️ SERIOUS PLAY®️: PROGRAM OUTLINE" />
					</div>
					<div className="desc">
						{/* <Text
            text={`Training Offerings`}
            className={'font-bold !text-lg'}
            /> */}
						<Text text={`Overview:`} className={"font-bold !text-lg"} />
						<p className={"!text-lg"}>
							LEGO®️ SERIOUS PLAY®️ (LSP) is an innovative, hands-on process
							designed to enhance creativity, communication, and
							problem-solving. This method uses LEGO bricks to build 3D models
							that represent complex problems and facilitate collaborative
							solution development.
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
								<span className="!pt-[1.8px]">Introduction to LSP: </span>
							</span>{" "}
							<span className="">{`Understanding the methodology and its applications.`}</span>
						</div>
						<div className="!pl-6">
							<span className="font-[500] inline-flex items-baseline gap-x-2  ">
								{" "}
								<DotIcon className={"flex self-center"} color={"black"} />{" "}
								<span className="!pt-[1.8px]">Building and Storytelling: </span>
							</span>{" "}
							<span className="">{`Constructing models to represent ideas and sharing insights.`}</span>
						</div>
						<div className="!pl-6">
							<span className="font-[500] inline-flex items-baseline gap-x-2  ">
								{" "}
								<DotIcon className={"flex self-center"} color={"black"} />{" "}
								<span className="!pt-[1.8px]">
									Strategic Planning and Team Building:{" "}
								</span>
							</span>{" "}
							<span className="">
								{
									"Applying LSP to develop strategies and improve team dynamics."
								}
							</span>
						</div>
						<div className="!pl-6">
							<span className="font-[500] inline-flex items-baseline gap-x-2  ">
								{" "}
								<DotIcon className={"flex self-center"} color={"black"} />{" "}
								<span className="!pt-[1.8px]">
									Scenario Planning and Solution Testing:{" "}
								</span>
							</span>{" "}
							<span className="">
								{
									"Using models to visualize and test various business scenarios."
								}
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
								<span className="!pt-[1.8px]">Enhanced Creativity: </span>
							</span>{" "}
							<span className="">{`Unlock new perspectives and innovative solutions.`}</span>
						</div>
						<div className="!pl-6">
							<span className="font-[500] inline-flex items-baseline gap-x-2  ">
								{" "}
								<DotIcon className={"flex self-center"} color={"black"} />{" "}
								<span className="!pt-[1.8px]">Improved Communication: </span>
							</span>{" "}
							<span className="">{`Foster open dialogue and mutual understanding among team members.`}</span>
						</div>
						<div className="!pl-6">
							<span className="font-[500] inline-flex items-baseline gap-x-2  ">
								{" "}
								<DotIcon className={"flex self-center"} color={"black"} />{" "}
								<span className="!pt-[1.8px]">Effective Problem-Solving: </span>
							</span>{" "}
							<span className="">
								{"Use 3D models to explore and address complex challenges."}
							</span>
						</div>
						<div className="!pl-6">
							<span className="font-[500] inline-flex items-baseline gap-x-2  ">
								{" "}
								<DotIcon className={"flex self-center"} color={"black"} />{" "}
								<span className="!pt-[1.8px]">Stronger Teams: </span>
							</span>{" "}
							<span className="">
								{"Build cohesion and collaboration within teams."}
							</span>
						</div>
						<br />

						<Text text={`Why Sign Up?`} className={"font-bold !text-lg"} />
						<p className={"!text-lg !pl-3 flex items-baseline gap-x-3"}>
							<DotIcon className={"w-[1em]"} color={"black"} />
							Leverage the same methodology used by companies like Samsung and
							Roche to drive innovation.
						</p>
						<p className={"!text-lg !pl-3 flex items-baseline gap-x-3"}>
							<DotIcon className={"w-[1em]"} color={"black"} />
							Benefit from a hands-on, engaging process that enhances team
							performance and strategic thinking.
						</p>
						<p className={"!text-lg !pl-3 flex items-baseline gap-x-3"}>
							<DotIcon className={"w-[1em]"} color={"black"} />
							Gain insights into your business challenges and opportunities
							through creative exploration.
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

export default DiscoverLSP;
