import Text from "@/components/Text";
import { TitleSm } from "@/components/Title";
import { DotIcon } from "@/public/assets/icons/icons";
import React from "react";
import Link from "next/link";

const LSP = () => {
	return (
		<>
			<section className="agency bg-top">
				<div className="sass-container !pb-28">
					<div className="heading-title">
						<TitleSm title="UNLEASH CREATIVITY WITH LEGO®️ SERIOUS PLAY®️" />
						<TitleSm
							title={`"Build and Innovate with LEGO®️ SERIOUS PLAY®️"`}
						/>
					</div>
					<div>
						<Text
							text={
								"LEGO®️ SERIOUS PLAY®️ (LSP) is a dynamic, hands-on process designed to enhance innovation and business performance. By using LEGO bricks, teams can visualize complex problems and develop innovative solutions collaboratively."
							}
							className={"text-center !text-lg"}
						/>
					</div>
					<br />
					<div>
						<Text
							text="Real-World Success Stories:"
							className={"!text-lg font-semibold"}
						/>
						<div className="!pl-6">
							<span className="font-[500] inline-flex items-baseline gap-x-2  ">
								{" "}
								<DotIcon className={"flex self-center"} color={"black"} />{" "}
								<span className="!pt-[1.8px]">Eltel Networks:</span>
							</span>{" "}
							<span className="">
								{`Used LSP for strategy development, `}{" "}
								<span>
									{" "}
									<Link
										className="link underline hover:text-green-500"
										href="https://inthrface.com/lego-serious-play-for-strategy-development"
									>
										resulting in a clear and actionable company vision that
										continues to guide their operations​ (Inthrface)​.
									</Link>{" "}
								</span>
							</span>
						</div>
						<div className="!pl-6">
							<span className="font-[500] inline-flex items-baseline gap-x-2  ">
								{" "}
								<DotIcon className={"flex self-center"} color={"black"} />{" "}
								<span className="!pt-[1.8px]">Samsung:</span>
							</span>{" "}
							<span className="">
								{`Applied LSP in their product development processes to `}{" "}
								<span>
									{" "}
									<Link
										className="link underline hover:text-green-500"
										href=" https://inthrface.com/lego-serious-play-method"
									>
										foster creative solutions and improve team dynamics​
										(Inthrface)​.
									</Link>{" "}
								</span>{" "}
							</span>
						</div>
						<div className="!pl-6">
							<span className="font-[500] inline-flex items-baseline gap-x-2  ">
								{" "}
								<DotIcon className={"flex self-center"} color={"black"} />{" "}
								<span className="!pt-[1.8px]">Roche:</span>
							</span>{" "}
							<span className="">
								{
									"Leveraged Kickbox to streamline and enhance their innovation processes, "
								}{" "}
								<span>
									{" "}
									<Link
										className="link underline hover:text-green-500"
										href="https://inthrface.com/lego-serious-play-for-team-building"
									>
										leading to substantial cost savings and improved service
										delivery​ (Swisscom Ventures)​.
									</Link>{" "}
								</span>{" "}
							</span>
						</div>
					</div>
					<br />
					<div className="grid gap-y-4 place-items-center ">
						<Text
							text={`"LEGO®️ SERIOUS PLAY®️ turns abstract concepts into tangible models, enabling effective communication and idea generation."`}
							className={"text-center !text-lg"}
						/>
						<Link
							className="bg-primary-300  flex justify-center w-full] rounded-md !py-4 !px-8 text-sm  !text-light "
							href={"/solutions/lsp/discover"}
						>
							Discover LSP®
						</Link>
					</div>
				</div>
			</section>

			{/* <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br /> */}
		</>
	);
};

export default LSP;
