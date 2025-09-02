import Banner from "@/components/Banner";
import Brand from "@/components/FAQs";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/Title";
import Text from "../Text";
import { DotIcon } from "@/public/assets/icons/icons";

const Agency = () => {
	return (
		<>
			<section className="agency bg-top">
				<div className="sass-container">
					<div className="heading-title">
						<TitleSm title="ABOUT US" />
					</div>
					<div>
						<Text
							text={
								"Welcome to Capital Growth Academy, a leading training and talent development consultancy in Sub-Saharan Africa. We specialize in design, innovation, and growth strategies, empowering businesses to scale and excel. Our approach merges innovative design thinking with strategic analysis, tailored specifically to the dynamics of regional markets."
							}
							className={"text-center !text-lg"}
						/>
					</div>

					<div className="content flex max-800:!mt-12">
						<div className="left sass-w-60">
							<TitleSm title="Our Vision" />
							<br />
							<p className="misson-p">
								"To be the catalyst for transformative business growth and
								innovation in Sub-Saharan Africa."
							</p>
						</div>
						<div className="right sass-w-40 !py-[3em] max-800:!pt-0 ">
							<img
								src="/assets/images/firm_2.jpg"
								alt="Img"
								className="round"
								width="100%"
								height="100%"
							/>
						</div>
					</div>

					<div className="content flex max-800:!flex-col-reverse">
						<div className="left sass-w-40 !py-[3em] max-800:!pb-[0em]">
							<img
								src="/assets/images/firm_black.jpg"
								alt="Img"
								className="round"
								width="100%"
								height="100%"
							/>
						</div>
						<div className="right sass-w-60 ml max-800:!text-center ">
							<TitleSm title="Our Mission" />
							<br />
							<p className="misson-p">
								"Our mission is to equip businesses with best-in-class training
								and strategic talent development, enabling them to innovate and
								scale effectively."
							</p>
						</div>
					</div>
					<div className="content max-800:!mt-4 flex">
						<div className="left sass-w-60">
							<TitleSm title="Our Core Values" />
							<br />
							<div className="misson-p grid gap-y-3">
								<span className="items-start gap-x-2 !text-left">
									<span className=" !gap-x-3 !inline">
										<DotIcon className={'!inline !mb-[3.5px] !mr-[5px]'} color={"black"} />{" "}
										<span className="font-bold">Audacity:</span>{" "}
									</span>
									<span className="">
										{"Encouraging bold and decisive actions in business."}
									</span>
								</span>
								<span className="items-start gap-x-2 !text-left">
									<span className=" !gap-x-3 !inline">
										<DotIcon className={'!inline !mb-[3.5px] !mr-[5px]'} color={"black"} />{" "}
										<span className="font-bold">Innovation:</span>{" "}
									</span>
									<span className="">
										{"Pushing the boundaries of creativity to keep our clients ahead"}
									</span>
								</span>
								<span className="items-start gap-x-2 !text-left">
									<span className=" !gap-x-3 !inline">
										<DotIcon className={'!inline !mb-[3.5px] !mr-[5px]'} color={"black"} />{" "}
										<span className="font-bold">Growth:</span>{" "}
									</span>
									<span className="">
										{"Focused on delivering scalable success and continuous improvement."}
									</span>
								</span>
								<span className="items-start gap-x-2 !text-left">
									<span className=" !gap-x-3 !inline">
										<DotIcon className={'!inline !mb-[3.5px] !mr-[5px]'} color={"black"} />{" "}
										<span className="font-bold">Empathy:</span>{" "}
									</span>
									<span className="">
										{"Tailoring solutions to meet the unique challenges of each business."}
									</span>
								</span>
							</div>
						</div>
						<div className="right sass-w-40 !py-[3em]">
							<img
								src="/assets/images/brain-storm.jpg"
								alt="Img"
								className="round"
								width="100%"
								height="100%"
							/>
						</div>
					</div>
					<div>
						<Text
							text={
								"At Capital Growth Academy, we are more than consultants; we are your partners in achieving sustained growth and operational excellence. Join us to redefine what's possible for your business in the vibrant markets of Sub-Saharan Africa."
							}
							className={"text-center !text-lg !pt-10 !pb-28"}
						/>
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

export default Agency;
